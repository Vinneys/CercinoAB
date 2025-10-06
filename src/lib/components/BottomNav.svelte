<script>
    import FeedIcon from '$lib/assets/FeedIcon.png';
    import ProfileIcon from '$lib/assets/ProfileIcon.png';
    import TicketIcon from '$lib/assets/TicketIcon.png';

    export let currentPage = 'main';
    /** @type {(page: 'main' | 'tickets' | 'profile') => void} */
    export let onNavigate;

    /** @param {'main'|'tickets'|'profile'} page */
    function handleClick(page) {
        if (typeof onNavigate === 'function') onNavigate(page);
    }
</script>

<nav class="bottom-nav">
    <button class="nav-item" class:active={currentPage === 'main'} on:click={() => handleClick('main')}>
        <img src={FeedIcon} alt="Feed" class="nav-icon" />
        <span>Feed</span>
    </button>
    <button class="nav-item" class:active={currentPage === 'tickets'} on:click={() => handleClick('tickets')}>
        <img src={TicketIcon} alt="Tickets" class="nav-icon" />
        <span>Tickets</span>
    </button>
    <button class="nav-item" class:active={currentPage === 'profile'} on:click={() => handleClick('profile')}>
        <img src={ProfileIcon} alt="Profile" class="nav-icon" />
        <span>Profile</span>
    </button>
</nav>

<style>
    .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: #000000;
        border-top: 1px solid #333333;
        display: flex;
        padding: 0.75rem 0;
        z-index: 1000;
        height: 80px;
        box-sizing: border-box;
        max-width: 500px;
        width: 100%;
    }

    .nav-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        color: #666666;
        transition: all 0.2s ease;
        position: relative;
    }

    .nav-item:hover { color: #F16CB3; }
    .nav-item.active { color: #F16CB3; }

    .nav-icon {
        width: 24px;
        height: 24px;
        filter: brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
        transition: filter 0.2s ease;
    }

    .nav-item:hover .nav-icon,
    .nav-item.active .nav-icon {
        filter: brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(2000%) hue-rotate(320deg) brightness(100%) contrast(100%);
    }

    .nav-item span { font-size: 0.8rem; font-weight: 500; }

    @media (min-width: 768px) {
        .bottom-nav { max-width: 600px; }
    }
</style>
