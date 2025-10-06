<script>
	import { goto } from '$app/navigation';
	import BottomNav from '$lib/components/BottomNav.svelte';
	let currentPage = 'profile';
	
	let userProfile = {
		name: 'Alexandra Svensson',
		age: '18år',
		email: 'Alexsven@gmail.com',
		phone: '+46 73 333 33 33',
		password: 'Ale*********',
		location: 'Brogatan 3a, Helsingborg',
		ticketsSold: '2394 tickets sold',
		joinDate: '21/03/2019'
	};
	
	function createEvent() {
		// Demo - just show alert
		alert('Create Event functionality would go here');
	}
	
	function changeEmail() {
		// Demo - just show alert
		alert('Change Email functionality would go here');
	}
	
	function changePassword() {
		// Demo - just show alert
		alert('Change Password functionality would go here');
	}
	
	function changePhone() {
		// Demo - just show alert
		alert('Change Phone functionality would go here');
	}

	/** @param {'main'|'tickets'|'profile'} page */
	function handleNavigate(page) {
		currentPage = page;
		switch (page) {
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
	}
</script>

<svelte:head>
	<title>Cercino Events - Business Profile</title>
</svelte:head>

<div class="profile-page">
	<!-- Banner Image -->
	<div class="banner-section">
		<div class="banner-image">
			<!-- Placeholder for Travis Scott concert image -->
			<div class="banner-placeholder"></div>
		</div>
	</div>
	
	<!-- Profile Info -->
	<div class="profile-info">
		<h1 class="community-name">FireClub</h1>
		<p class="join-date">Joined the community {userProfile.joinDate}</p>
		<p class="description">You have to follow our rules in order to create the perfect experience. You have to follow our rules in order to create the perfect experience.</p>
		
		<div class="info-row">
			<div class="info-item">
				<span class="info-icon">📍</span>
				<span class="info-text">{userProfile.location}</span>
			</div>
		</div>
		
		<div class="info-row">
			<div class="info-item">
				<span class="info-icon">🎫</span>
				<span class="info-text">{userProfile.ticketsSold}</span>
			</div>
		</div>
	</div>
	
	<!-- Settings Section -->
	<div class="settings-section">
		<h2 class="settings-title">Settings</h2>
		
		<div class="settings-card">
			<div class="setting-row">
				<div class="setting-info">
					<span class="setting-label">{userProfile.name}</span>
					<span class="setting-value">{userProfile.age}</span>
				</div>
			</div>
			
			<div class="setting-row">
				<div class="setting-info">
					<span class="setting-label">{userProfile.email}</span>
				</div>
				<button class="change-btn" on:click={changeEmail}>Change</button>
			</div>
			
			<div class="setting-row">
				<div class="setting-info">
					<span class="setting-label">Password: {userProfile.password}</span>
				</div>
				<button class="change-btn" on:click={changePassword}>Change</button>
			</div>
			
			<div class="setting-row">
				<div class="setting-info">
					<span class="setting-label">Phone: {userProfile.phone}</span>
				</div>
				<button class="change-btn" on:click={changePhone}>Change</button>
			</div>
		</div>
		
		<div class="create-event-card">
			<div class="create-event-info">
				<span class="create-event-text">Create event</span>
			</div>
			<button class="create-btn" on:click={createEvent}>Create</button>
		</div>
	</div>
	
	<!-- Bottom Navigation -->
	<BottomNav {currentPage} onNavigate={handleNavigate} />
</div>

<style>
	.profile-page {
		background: #000000;
		min-height: 100vh;
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	}
	
	.banner-section {
		width: 100%;
		height: 200px;
		position: relative;
	}
	
	.banner-image {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.banner-placeholder {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 1.2rem;
		font-weight: 500;
	}
	
	.profile-info {
		padding: 1.5rem;
		background: #000000;
	}
	
	.community-name {
		font-size: 1.8rem;
		font-weight: bold;
		color: white;
		margin: 0 0 0.5rem 0;
	}
	
	.join-date {
		font-size: 0.9rem;
		color: #999999;
		margin: 0 0 1rem 0;
	}
	
	.description {
		font-size: 0.9rem;
		color: #cccccc;
		line-height: 1.4;
		margin: 0 0 1.5rem 0;
	}
	
	.info-row {
		margin-bottom: 0.75rem;
	}
	
	.info-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	
	.info-icon {
		font-size: 1rem;
		color: #F16CB3;
	}
	
	.info-text {
		font-size: 0.9rem;
		color: white;
	}
	
	.settings-section {
		padding: 0 1.5rem 2rem 1.5rem;
	}
	
	.settings-title {
		font-size: 1.2rem;
		font-weight: 600;
		color: white;
		margin: 0 0 1rem 0;
	}
	
	.settings-card {
		background: #1C1C1C;
		border-radius: 12px;
		padding: 1rem;
		margin-bottom: 1rem;
	}
	
	.setting-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 0;
		border-bottom: 1px solid #333333;
	}
	
	.setting-row:last-child {
		border-bottom: none;
	}
	
	.setting-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	
	.setting-label {
		font-size: 0.9rem;
		color: white;
		font-weight: 500;
	}
	
	.setting-value {
		font-size: 0.8rem;
		color: #999999;
	}
	
	.change-btn {
		background: transparent;
		color: #F16CB3;
		border: none;
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		transition: background 0.2s;
	}
	
	.change-btn:hover {
		background: rgba(241, 108, 179, 0.1);
	}
	
	.create-event-card {
		background: #1C1C1C;
		border-radius: 12px;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.create-event-info {
		display: flex;
		flex-direction: column;
	}
	
	.create-event-text {
		font-size: 0.9rem;
		color: white;
		font-weight: 500;
	}
	
	.create-btn {
		background: transparent;
		color: #F16CB3;
		border: none;
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		transition: background 0.2s;
	}
	
	.create-btn:hover {
		background: rgba(241, 108, 179, 0.1);
	}
	
	@media (max-width: 768px) {
		.profile-info {
			padding: 1rem;
		}
		
		.settings-section {
			padding: 0 1rem 2rem 1rem;
		}
		
		.community-name {
			font-size: 1.5rem;
		}
	}
</style>
