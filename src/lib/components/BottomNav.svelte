<script>
	import { goto } from '$app/navigation';
	import FeedIcon from '$lib/assets/FeedIcon.png';
	import ProfileIcon from '$lib/assets/ProfileIcon.png';
	import TicketIcon from '$lib/assets/TicketIcon.png';
	
	export let currentPage = 'main';
	export let userType = 'user'; // 'user' or 'business'
	
	function goToPage(page) {
		if (userType === 'business') {
			switch(page) {
				case 'main':
					goto('/app');
					break;
				case 'tickets':
					goto('/tickets');
					break;
				case 'profile':
					goto('/business-profile');
					break;
			}
		} else {
			switch(page) {
				case 'main':
					goto('/app');
					break;
				case 'tickets':
					goto('/tickets');
					break;
				case 'profile':
					goto('/profile');
					break;
			}
		}
	}
</script>

<nav class="bottom-nav">
	<button class="nav-item" class:active={currentPage === 'main'} on:click={() => goToPage('main')}>
		<img src={FeedIcon} alt="Feed" class="nav-icon" />
		<span>Feed</span>
	</button>
	<button class="nav-item" class:active={currentPage === 'tickets'} on:click={() => goToPage('tickets')}>
		<img src={TicketIcon} alt="Tickets" class="nav-icon" />
		<span>Tickets</span>
	</button>
	<button class="nav-item" class:active={currentPage === 'profile'} on:click={() => goToPage('profile')}>
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
		justify-content: space-around;
		width: 100%;
		max-width: 500px;
		padding: 0.75rem 0;
		z-index: 1000;
	}
	
	.nav-item {
		background: transparent;
		border: none;
		color: #666666;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		padding: 0.5rem;
		transition: color 0.2s ease;
		flex: 1;
	}
	
	.nav-item:hover,
	.nav-item.active {
		color: #F16CB3;
	}
	
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
	
	.nav-item span {
		font-size: 0.8rem;
		font-weight: 500;
	}
	
	/* Responsive Design */
	@media (min-width: 768px) {
		.bottom-nav {
			max-width: 600px;
		}
	}
</style>
