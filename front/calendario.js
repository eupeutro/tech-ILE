// Estado do calendário
let currentDate = new Date();
let currentView = 'month';
let events = [
    {
        id: 1,
        title: 'Toque de Xangô',
        date: '2024-09-15',
        time: '19:00',
        type: 'religioso',
        location: 'Salão principal'
    },
    {
        id: 2,
        title: 'Aniversário de Maria',
        date: '2024-09-18',
        time: '15:00',
        type: 'aniversario',
        location: 'Área externa'
    },
    {
        id: 3,
        title: 'Reunião Mensal',
        date: '2024-09-22',
        time: '14:00',
        type: 'reuniao',
        location: 'Sala de reuniões'
    },
    {
        id: 4,
        title: 'Feijoada Beneficente',
        date: '2024-09-25',
        time: '12:00',
        type: 'festa',
        location: 'Área externa'
    },
    {
        id: 5,
        title: 'Obrigação de Oxalá',
        date: '2024-09-30',
        time: '18:00',
        type: 'religioso',
        location: 'Salão principal'
    }
];

// Nomes dos meses
const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeCalendar();
    setupEventListeners();
    renderCalendar();
    updateUpcomingEvents();
});

function initializeCalendar() {
    // Define a data atual no calendário
    currentDate = new Date();
    updateCurrentMonthDisplay();
}

function setupEventListeners() {
    // Navegação do mês
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
        updateCurrentMonthDisplay();
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
        updateCurrentMonthDisplay();
    });

    // Toggle de visualização
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentView = e.target.dataset.view;
            // TODO: Implementar diferentes visualizações
        });
    });

    // Filtros
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            renderCalendar();
            updateUpcomingEvents();
        });
    });

    // Modal
    document.getElementById('addEventBtn').addEventListener('click', openModal);
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('cancelEvent').addEventListener('click', closeModal);
    document.getElementById('eventForm').addEventListener('submit', handleEventSubmit);
    
    // Fechar modal clicando fora
    document.getElementById('eventModal').addEventListener('click', (e) => {
        if (e.target.id === 'eventModal') {
            closeModal();
        }
    });
}

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Primeiro e último dia do mês
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Primeiro dia da semana (0 = domingo)
    const startingDay = firstDay.getDay();
    
    // Dias do mês anterior para completar a primeira semana
    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();
    
    const daysGrid = document.getElementById('daysGrid');
    daysGrid.innerHTML = '';
    
    // Cria 6 semanas (42 células)
    for (let i = 0; i < 42; i++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        
        let day, isCurrentMonth;
        
        if (i < startingDay) {
            // Dias do mês anterior
            day = prevMonthDays - (startingDay - i - 1);
            isCurrentMonth = false;
        } else if (i >= startingDay + daysInMonth) {
            // Dias do próximo mês
            day = i - startingDay - daysInMonth + 1;
            isCurrentMonth = false;
        } else {
            // Dias do mês atual
            day = i - startingDay + 1;
            isCurrentMonth = true;
        }
        
        if (!isCurrentMonth) {
            dayCell.classList.add('other-month');
        }
        
        // Verifica se é hoje
        const today = new Date();
        if (isCurrentMonth && 
            day === today.getDate() && 
            month === today.getMonth() && 
            year === today.getFullYear()) {
            dayCell.classList.add('today');
        }
        
        // Número do dia
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = day;
        dayCell.appendChild(dayNumber);
        
        // Indicador de eventos
        if (isCurrentMonth) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayEvents = getEventsForDate(dateStr);
            
            if (dayEvents.length > 0) {
                const indicator = document.createElement('div');
                if (dayEvents.length === 1) {
                    indicator.className = 'event-indicator';
                } else {
                    indicator.className = 'event-indicator multiple';
                    indicator.textContent = dayEvents.length;
                }
                dayCell.appendChild(indicator);
            }
        }
        
        // Adicionar evento ao clicar no dia
        dayCell.addEventListener('click', () => {
            if (isCurrentMonth) {
                const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                openModal(dateStr);
            }
        });
        
        daysGrid.appendChild(dayCell);
    }
}

function getEventsForDate(dateStr) {
    const activeFilters = getActiveFilters();
    return events.filter(event => 
        event.date === dateStr && activeFilters.includes(event.type)
    );
}

function getActiveFilters() {
    const filters = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        const type = checkbox.id.replace('filter-', '');
        filters.push(type);
    });
    return filters;
}

function updateCurrentMonthDisplay() {
    const monthDisplay = document.getElementById('currentMonth');
    monthDisplay.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
}

function updateUpcomingEvents() {
    const upcomingContainer = document.getElementById('upcomingEvents');
    const activeFilters = getActiveFilters();
    
    // Filtrar e ordenar eventos por data
    const upcoming = events
        .filter(event => activeFilters.includes(event.type))
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5); // Mostrar apenas os próximos 5
    
    upcomingContainer.innerHTML = '';
    
    upcoming.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = `event-item ${event.type}`;
        
        const date = new Date(event.date);
        const day = date.getDate();
        const monthShort = monthNames[date.getMonth()].substring(0, 3);
        
        eventElement.innerHTML = `
            <div class="event-dot"></div>
            <div class="event-details">
                <div class="event-title">${event.title}</div>
                <div class="event-time">${day} ${monthShort} • ${event.time}</div>
            </div>
        `;
        
        upcomingContainer.appendChild(eventElement);
    });
}

// Modal functions
function openModal(selectedDate = null) {
    const modal = document.getElementById('eventModal');
    const form = document.getElementById('eventForm');
    
    // Reset form
    form.reset();
    
    // Se uma data foi selecionada, pré-preencher
    if (selectedDate) {
        document.getElementById('eventDate').value = selectedDate;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function handleEventSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newEvent = {
        id: events.length + 1,
        title: document.getElementById('eventTitle').value,
        date: document.getElementById('eventDate').value,
        time: document.getElementById('eventTime').value,
        type: document.getElementById('eventType').value,
        location: document.getElementById('eventLocation').value,
        description: document.getElementById('eventDescription').value
    };
    
    events.push(newEvent);
    
    // Atualizar interface
    renderCalendar();
    updateUpcomingEvents();
    closeModal();
    
    // Mostrar confirmação
    showNotification('Evento criado com sucesso!', 'success');
}

function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Estilos da notificação
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 20px',
        background: type === 'success' ? '#2ecc71' : '#3498db',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateY(-20px)',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animação de entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Função para navegação suave (reutilizada do cadastro.html)
function navigateSmooth(url) {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-out';
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// Fade-in ao carregar a página
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Atalhos do teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
    if (e.key === 'n' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        openModal();
    }
});