<script>
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import FeedIcon from '$lib/assets/FeedIcon.png';
	import ProfileIcon from '$lib/assets/ProfileIcon.png';
	import TicketIcon from '$lib/assets/TicketIcon.png';
	import SearchIcon from '$lib/assets/SearchIcon.svg';
	import QrDemo from '$lib/assets/QrDemo.png';
	import CercinoMainLogo from '$lib/assets/CercinoMainLogo.png';

	// Basic state management
	let currentPage = 'main';
	/** @type {any} */
	let selectedEvent = null;
	/** @type {any} */
	let expandedEvent = null; // Track which event is expanded
	/** @type {Array<{event: any, quantity: number}>} */
	let cart = [];
	let userProfile = {
		name: 'Alexandra Svensson',
		email: 'alexandra@example.com',
		phone: '+46 70 123 4567',
		/** @type {any[]} */
		tickets: [
			{
				id: 1,
				title: 'Pulse Night',
				description: 'A high-energy party where the music never stops and the crowd moves as one heartbeat.',
				image: '/src/lib/assets/CuliseDemo.jpg',
				price: 250,
				date: '2025-02-24',
				time: '22:00',
				city: 'Stockholm',
				venue: 'Downtown Club',
				category: 'music',
				quantity: 1,
				purchaseDate: '2025-02-23',
				status: 'active',
				attendeeName: 'Alexandra Svensson',
				age: 18,
				qrCode: QrDemo
			},
			{
				id: 2,
				title: 'Neon Countdown',
				description: 'A high-energy party where the music never stops and the crowd moves as one heartbeat.',
				image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
				price: 300,
				date: '2025-02-28',
				time: '21:00',
				city: 'Göteborg',
				venue: 'Neon Arena',
				category: 'music',
				quantity: 2,
				purchaseDate: '2025-02-25',
				status: 'active',
				attendeeName: 'Alexandra Svensson',
				age: 18,
				qrCode: QrDemo
			},
			{
				id: 3,
				title: 'Pulse Night',
				description: 'A high-energy party where the music never stops and the crowd moves as one heartbeat.',
				image: '/src/lib/assets/CuliseDemo.jpg',
				price: 250,
				date: '2025-01-15',
				time: '22:00',
				city: 'Helsingborg',
				venue: 'Redaregatan 46A',
				category: 'music',
				quantity: 1,
				purchaseDate: '2025-01-10',
				status: 'completed',
				attendeeName: 'Alexandra Svensson',
				age: 18,
				qrCode: QrDemo
			},
			{
				id: 4,
				title: 'Pulse Night',
				description: 'A high-energy party where the music never stops and the crowd moves as one heartbeat.',
				image: '/src/lib/assets/CuliseDemo.jpg',
				price: 250,
				date: '2025-01-08',
				time: '22:00',
				city: 'Helsingborg',
				venue: 'Redaregatan 46A',
				category: 'music',
				quantity: 1,
				purchaseDate: '2025-01-05',
				status: 'completed',
				attendeeName: 'Alexandra Svensson',
				age: 18,
				qrCode: QrDemo
			},
			{
				id: 5,
				title: 'Pulse Night',
				description: 'A high-energy party where the music never stops and the crowd moves as one heartbeat.',
				image: '/src/lib/assets/CuliseDemo.jpg',
				price: 250,
				date: '2025-01-03',
				time: '22:00',
				city: 'Helsingborg',
				venue: 'Redaregatan 46A',
				category: 'music',
				quantity: 1,
				purchaseDate: '2024-12-30',
				status: 'refunded',
				attendeeName: 'Alexandra Svensson',
				age: 18,
				qrCode: QrDemo
			},
			{
				id: 6,
				title: 'Pulse Night',
				description: 'A high-energy party where the music never stops and the crowd moves as one heartbeat.',
				image: '/src/lib/assets/CuliseDemo.jpg',
				price: 250,
				date: '2024-12-28',
				time: '22:00',
				city: 'Helsingborg',
				venue: 'Redaregatan 46A',
				category: 'music',
				quantity: 1,
				purchaseDate: '2024-12-25',
				status: 'completed',
				attendeeName: 'Alexandra Svensson',
				age: 18,
				qrCode: QrDemo
			}
		]
	};
	let isScrolled = true; // Always in scrolled state
	let activeTab = 'current'; // For tickets page tabs
	let currentTicketIndex = 0; // Track which ticket is currently displayed
	let quantity = 1; // For ticket quantity selection
	let selectedFilter = 'trending'; // Track selected category filter
	/** @type {number | null} */
	let expandedHistoryTicket = null; // Track which history ticket is expanded
	/** @type {string | null} */
	let nextTicketAvailable = null; // Track when next ticket will be available

	// Sample events data
	const events = [
		{ 
			id: 1, 
			title: 'Pulse Night', 
			description: 'A high-energy party where the music never stops and the crowd moves as one heartbeat. Expect pure vibes, booming sound, and unforgettable moments.',
			image: '/src/lib/assets/CuliseDemo.jpg',
			price: 250,
			date: '2024-12-15',
			time: '22:00',
			city: 'Stockholm',
			venue: 'Downtown Club',
			category: 'music',
			capacity: 500,
			available: 150,
			company: 'Cercino Events'
		},
		{ 
			id: 2, 
			title: 'Neon Countdown', 
			description: 'A high-energy party where the music never stops and the crowd moves as one heartbeat. Expect pure vibes, booming sound, and unforgettable moments.',
			image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
			price: 300,
			date: '2024-12-20',
			time: '21:00',
			city: 'Göteborg',
			venue: 'Neon Arena',
			category: 'music',
			capacity: 800,
			available: 200,
			company: 'Cercino Events'
		},
		{ 
			id: 3, 
			title: 'Midnight Vibes', 
			description: 'A high-energy party where the music never stops and the crowd moves as one heartbeat. Expect pure vibes, booming sound, and unforgettable moments.',
			image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
			price: 200,
			date: '2024-12-22',
			time: '23:00',
			city: 'Malmö',
			venue: 'Midnight Lounge',
			category: 'music',
			capacity: 300,
			available: 75,
			company: 'Cercino Events'
		},
		{ 
			id: 4, 
			title: 'Art Gallery Opening', 
			description: 'Experience contemporary art from emerging artists. Wine and cheese reception included.',
			image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
			price: 150,
			date: '2024-12-18',
			time: '18:00',
			city: 'Stockholm',
			venue: 'Modern Art Gallery',
			category: 'art',
			capacity: 200,
			available: 50,
			company: 'Cercino Events'
		},
		{ 
			id: 5, 
			title: 'Food Festival', 
			description: 'Taste the best local cuisine from top chefs. Live cooking demonstrations and tastings.',
			image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
			price: 350,
			date: '2024-12-25',
			time: '12:00',
			city: 'Göteborg',
			venue: 'City Park',
			category: 'food',
			capacity: 1000,
			available: 300,
			company: 'Cercino Events'
		},
		{ 
			id: 6, 
			title: 'Comedy Night', 
			description: 'Laugh your way through the night with top comedians. 18+ event with drinks available.',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
			price: 180,
			date: '2024-12-28',
			time: '20:00',
			city: 'Stockholm',
			venue: 'Comedy Club',
			category: 'comedy',
			capacity: 150,
			available: 25,
			company: 'Cercino Events'
		},
		{ 
			id: 7, 
			title: 'Tech Conference 2024', 
			description: 'Join industry leaders for the latest in technology, AI, and innovation. Networking opportunities included.',
			image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
			price: 1200,
			date: '2024-12-30',
			time: '09:00',
			city: 'Stockholm',
			venue: 'Convention Center',
			category: 'tech',
			capacity: 2000,
			available: 500,
			company: 'Cercino Events'
		},
		{ 
			id: 8, 
			title: 'Fashion Week', 
			description: 'Experience the latest trends from Swedish designers. Runway shows and after-parties.',
			image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
			price: 450,
			date: '2025-01-05',
			time: '19:00',
			city: 'Stockholm',
			venue: 'Fashion District',
			category: 'fashion',
			capacity: 400,
			available: 100,
			company: 'Cercino Events'
		},
		{ 
			id: 9, 
			title: 'Wine Tasting Evening', 
			description: 'Sample premium wines from around the world with expert sommeliers. Light appetizers included.',
			image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop',
			price: 280,
			date: '2025-01-08',
			time: '18:30',
			city: 'Göteborg',
			venue: 'Wine Cellar',
			category: 'food',
			capacity: 80,
			available: 15,
			company: 'Cercino Events'
		},
		{ 
			id: 10, 
			title: 'Yoga Retreat', 
			description: 'Relax and rejuvenate with guided yoga sessions in a peaceful natural setting.',
			image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
			price: 320,
			date: '2025-01-12',
			time: '08:00',
			city: 'Malmö',
			venue: 'Nature Retreat',
			category: 'wellness',
			capacity: 60,
			available: 20,
			company: 'Cercino Events'
		},
		{ 
			id: 11, 
			title: 'Gaming Tournament', 
			description: 'Compete in the biggest esports tournament of the year. Prizes worth 50,000 SEK.',
			image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop',
			price: 100,
			date: '2025-01-15',
			time: '14:00',
			city: 'Stockholm',
			venue: 'Gaming Arena',
			category: 'gaming',
			capacity: 500,
			available: 200,
			company: 'Cercino Events'
		},
		{ 
			id: 12, 
			title: 'Jazz Night', 
			description: 'Enjoy smooth jazz performances by renowned musicians in an intimate setting.',
			image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
			price: 220,
			date: '2025-01-18',
			time: '21:00',
			city: 'Göteborg',
			venue: 'Jazz Club',
			category: 'music',
			capacity: 120,
			available: 30,
			company: 'Cercino Events'
		}
	];

	// Navigation functions
	/** @param {any} page */
	function goToPage(page) {
		currentPage = page;
	}

	/** @param {any} event */
	function selectEvent(event) {
		selectedEvent = event;
		currentPage = 'event';
	}

	/** @param {any} event */
	function addToCart(event, quantity = 1) {
		cart.push({ event, quantity });
		currentPage = 'checkout';
	}

	function completePurchase() {
		// Add tickets to user profile
		cart.forEach(item => {
			const now = new Date();
			const formattedDate = now.toLocaleDateString('en-GB'); // dd/mm/yyyy format
			
			userProfile.tickets.push({
				...item.event,
				quantity: item.quantity,
				purchaseDate: formattedDate,
				status: 'active',
				attendeeName: userProfile.name || 'Alexandra Svensson',
				age: 18,
				qrCode: QrDemo
			});
		});
		cart = [];
		currentPage = 'profile';
		
		// Calculate when next ticket will be available
		calculateNextTicketAvailability();
	}

	/** @param {any} filter */
	function selectFilter(filter) {
		selectedFilter = filter;
	}

	function getFilteredEvents() {
		// Return all events for trending, or filter by category
		if (selectedFilter === 'trending') {
			return events;
		}
		// For other categories, return events that match the category
		return events.filter(event => event.category === selectedFilter);
	}

	function getActiveTickets() {
		return userProfile.tickets.filter(ticket => ticket.status === 'active');
	}

	function nextTicket() {
		const activeTickets = getActiveTickets();
		if (currentTicketIndex < activeTickets.length - 1) {
			currentTicketIndex++;
		}
	}

	function prevTicket() {
		if (currentTicketIndex > 0) {
			currentTicketIndex--;
		}
	}

	/** @param {number} index */
	function goToTicket(index) {
		currentTicketIndex = index;
	}

	/** @param {number} ticketId */
	function toggleHistoryTicket(ticketId) {
		try {
			expandedHistoryTicket = expandedHistoryTicket === ticketId ? null : ticketId;
		} catch (error) {
			console.error('Error toggling history ticket:', error);
		}
	}

	function calculateNextTicketAvailability() {
		const activeTickets = getActiveTickets();
		if (activeTickets.length > 0) {
			// Find the earliest attendance date among active tickets
			const earliestDate = activeTickets.reduce((earliest, ticket) => {
				const ticketDate = new Date(ticket.date);
				return ticketDate < earliest ? ticketDate : earliest;
			}, new Date(activeTickets[0].date));
			
			// Set next ticket available date to the day after the earliest attendance date
			const nextAvailable = new Date(earliestDate);
			nextAvailable.setDate(nextAvailable.getDate() + 1);
			nextTicketAvailable = nextAvailable.toLocaleDateString('en-GB');
		} else {
			nextTicketAvailable = null;
		}
	}

	function logout() {
		// Reset user profile and go to login page
		userProfile = {
			name: '',
			email: '',
			phone: '',
			tickets: []
		};
		goto('/login');
	}

	// Reactive statement to calculate next ticket availability when tickets change
	$: if (userProfile.tickets) {
		calculateNextTicketAvailability();
	}

	function logout() {
		// Clear any session data if needed
		// For now, just redirect to the main page
		goto('/');
	}
</script>

<div class="app">
	{#if currentPage === 'main'}
		<!-- Main Page -->
		<main class="main-page">
			<!-- Fixed Search and Categories Section -->
			<div class="search-categories-section" class:scrolled={isScrolled}>
				<div class="search-bar">
					<img src={SearchIcon} alt="Search" class="search-icon" />
					<input type="text" placeholder="Search" />
				</div>
				
				<section class="categories">
					<div class="category-filters">
						<button class:active={selectedFilter === 'trending'} on:click={() => selectFilter('trending')}>Trending</button>
						<button class:active={selectedFilter === 'music'} on:click={() => selectFilter('music')}>Music</button>
						<button class:active={selectedFilter === 'art'} on:click={() => selectFilter('art')}>Art</button>
						<button class:active={selectedFilter === 'food'} on:click={() => selectFilter('food')}>Food</button>
						<button class:active={selectedFilter === 'comedy'} on:click={() => selectFilter('comedy')}>Comedy</button>
						<button class:active={selectedFilter === 'tech'} on:click={() => selectFilter('tech')}>Tech</button>
						<button class:active={selectedFilter === 'fashion'} on:click={() => selectFilter('fashion')}>Fashion</button>
						<button class:active={selectedFilter === 'wellness'} on:click={() => selectFilter('wellness')}>Wellness</button>
						<button class:active={selectedFilter === 'gaming'} on:click={() => selectFilter('gaming')}>Gaming</button>
					</div>
				</section>
			</div>


			<section class="trending">
				<h2>{selectedFilter === 'trending' ? 'Trending' : selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}</h2>
				<div class="events-grid">
				{#each getFilteredEvents() as event}
					<div class="event-card" 
						on:click={() => selectEvent(event)}
						role="button"
						tabindex="0"
						on:keydown={(e) => e.key === 'Enter' && selectEvent(event)}>
						<div class="event-image">
							<img src={event.image} alt={event.title} />
							<div class="event-company">{event.company}</div>
							<div class="event-overlay">
								<h3 class="event-title">{event.title}</h3>
							</div>
						</div>
					</div>
				{/each}
				</div>
			</section>
		</main>

	{:else if currentPage === 'event' && selectedEvent}
		<!-- Event Page -->
		<main class="event-page">
			<div class="event-hero">
				<img src={selectedEvent.image} alt={selectedEvent.title} class="event-hero-image" />
			</div>
			
			<div class="event-content">
				<h1 class="event-title">{selectedEvent.title}</h1>
				<p class="event-description">{selectedEvent.description}</p>
				
				<h2 class="section-title">{selectedEvent.title}</h2>
				<p class="section-content">{selectedEvent.description}</p>
				
				<h2 class="section-title">Rules</h2>
				<p class="section-content">{selectedEvent.description}</p>
				
				<h2 class="section-title">Refund</h2>
				<p class="section-content">{selectedEvent.description}</p>
			</div>
			
			<div class="ticket-purchase-bar">
				<div class="price-section">
					<div class="price-controls">
						<button class="quantity-btn" on:click={() => quantity = Math.max(1, quantity - 1)}>-</button>
						<span class="quantity">{quantity}</span>
						<button class="quantity-btn" on:click={() => quantity = quantity + 1}>+</button>
					</div>
					<div class="price-info">
						<span class="price">{selectedEvent.price}kr</span>
						<span class="per-ticket">per ticket</span>
					</div>
				</div>
				<button class="buy-ticket-btn" on:click={() => addToCart(selectedEvent, quantity)}>Buy Ticket</button>
			</div>
		</main>

	{:else if currentPage === 'checkout'}
		<!-- Checkout Page -->
		<main class="checkout-page">
			<header class="page-header">
				<button on:click={() => goToPage('main')}>← Back</button>
				<h1>Checkout</h1>
			</header>

			<div class="checkout-content">
				<div class="cart-items">
					<h2>Your Order</h2>
					{#each cart as item}
						<div class="cart-item">
							<img src={item.event.image} alt={item.event.title} />
							<div class="item-info">
								<h3>{item.event.title}</h3>
								<p>{item.event.city} • {item.event.date}</p>
								<p>Quantity: {item.quantity}</p>
								<p>Price: {item.event.price * item.quantity} kr</p>
							</div>
						</div>
					{/each}
				</div>

				<div class="payment-section">
					<h2>Payment</h2>
					<div class="payment-methods">
						<button class="payment-btn active">Swish</button>
						<button class="payment-btn">Card</button>
						<button class="payment-btn">Bank Transfer</button>
					</div>

					<div class="user-info">
						<h3>Your Information</h3>
						<input type="text" placeholder="Name" bind:value={userProfile.name} />
						<input type="email" placeholder="Email" bind:value={userProfile.email} />
						<input type="tel" placeholder="Phone" bind:value={userProfile.phone} />
					</div>

					<div class="total">
						<h3>Total: {cart.reduce((sum, item) => sum + (item.event.price * item.quantity), 0)} kr</h3>
						<button on:click={completePurchase} class="purchase-btn">Complete Purchase</button>
					</div>
				</div>
			</div>
		</main>

	{:else if currentPage === 'tickets'}
		<!-- Tickets Page -->
		<main class="tickets-page">
			<div class="ticket-tabs">
				<button class="tab-btn" class:active={activeTab === 'current'} on:click={() => activeTab = 'current'}>Ticket</button>
				<button class="tab-btn" class:active={activeTab === 'history'} on:click={() => activeTab = 'history'}>Ticket History</button>
			</div>

			{#if activeTab === 'current'}
				{@const activeTickets = userProfile.tickets.filter(ticket => ticket.status === 'active')}
				{#if activeTickets.length > 0}
					{@const currentTicket = activeTickets[currentTicketIndex]}
					<div class="ticket-detail-card">
						<!-- QR Code Section -->
						<div class="qr-code-section">
							<img src={currentTicket.qrCode} alt="QR Code" class="qr-code" />
						</div>
						
						<!-- Ticket Details -->
						<div class="ticket-details">
							<div class="event-header">
								<h2 class="event-name">{currentTicket.title}</h2>
								<span class="quantity">x{currentTicket.quantity}</span>
							</div>
							
							<div class="attendee-info">
								<p class="attendee-name">{currentTicket.attendeeName}</p>
								<p class="attendee-age">{currentTicket.age}år</p>
							</div>
							
							<div class="date-info">
								<p class="attendance-date">Attedence: {currentTicket.date.split('-').reverse().join('/')}</p>
								<p class="bought-date">Bought: {currentTicket.purchaseDate}</p>
							</div>
						</div>
						
						<!-- Location Section -->
						<div class="location-section">
							<h3 class="location-title">Location</h3>
							<div class="map-container">
								<iframe 
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.0!2d18.0686!3d59.3293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e8c77b767d%3A0x4b7ff4d6b47c7571!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sse!4v1640000000000!5m2!1sen!2sse"
									width="100%" 
									height="200" 
									style="border:0;" 
									allowfullscreen={true}
									loading="lazy" 
									referrerpolicy="no-referrer-when-downgrade"
									title="Event location map">
								</iframe>
							</div>
						</div>
						
						<!-- Info Text -->
						<p class="info-text">
							All your tickets will be shown in this page up to 24 hours before the event.
							{#if nextTicketAvailable}
								<span class="next-ticket-text"> Next ticket available after: <span class="next-ticket-date">{nextTicketAvailable}</span></span>
							{/if}
						</p>
					</div>
				{:else}
					<div class="no-tickets">
						<p>No active tickets</p>
					</div>
				{/if}
			{:else}
				{@const historyTickets = userProfile.tickets.filter(ticket => ticket.status === 'completed' || ticket.status === 'refunded')}
				<div class="tickets-history">
					{#each historyTickets as ticket (ticket.id)}
						<div class="history-ticket-card" class:expanded={expandedHistoryTicket === ticket.id}>
							<div 
								class="history-image-section" 
								on:click={() => toggleHistoryTicket(ticket.id)}
								on:keydown={(e) => e.key === 'Enter' && toggleHistoryTicket(ticket.id)}
								role="button"
								tabindex="0"
								aria-label="Toggle ticket details for {ticket.title}">
								<img 
									src={ticket.image} 
									alt={ticket.title} 
									class="history-image"
									on:error={(e) => console.error('Image load error for ticket', ticket.id, e)}
									loading="lazy" />
								<div class="history-overlay">
									<h3 class="history-title">{ticket.title}</h3>
								</div>
							</div>
							
							{#if expandedHistoryTicket === ticket.id}
								<div class="history-expanded-content">
									<div class="expanded-details">
										<div class="detail-row">
											<span class="detail-label">LOCATION</span>
											<span class="detail-value">{ticket.venue}, {ticket.city}</span>
										</div>
										<div class="detail-row">
											<span class="detail-quantity">x{ticket.quantity}</span>
										</div>
										<div class="detail-row">
											<span class="detail-label">Attendance: none</span>
										</div>
										<div class="detail-row">
											<span class="detail-label">Bought: {ticket.purchaseDate.split('-').reverse().join('/')}</span>
										</div>
									</div>
								</div>
								
								<div class="history-text-section">
									<span class="status-text">{ticket.status === 'completed' ? 'Completed' : 'Refounded'}</span>
									<span class="support-text">Support</span>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
		</main>

	{:else if currentPage === 'profile'}
		<!-- Profile Page -->
		<main class="profile-page">
			<div class="profile-content">
				<!-- Logo Section -->
				<div class="logo-section">
					<img src={CercinoMainLogo} alt="Cercino Logo" class="main-logo" />
				</div>

				<!-- Settings Section -->
				<div class="settings-section">
					<h2 class="settings-title">Settings</h2>
					
					<div class="settings-card">
						<div class="setting-row">
							<span class="setting-label name-age">Alexandra Svensson</span>
							<span class="setting-value name-age">18år</span>
						</div>
						
						<div class="setting-row">
							<span class="setting-label">Alexsven@gmail.com</span>
							<button class="change-btn">Change</button>
						</div>
						
						<div class="setting-row">
							<span class="setting-label">Password: Ale*********</span>
							<button class="change-btn">Change</button>
						</div>
						
						<div class="setting-row">
							<span class="setting-label">Phone: +46 73 333 33 33</span>
							<button class="change-btn">Change</button>
						</div>
					</div>
				</div>

				<!-- Bottom Section -->
				<div class="bottom-section">
					<!-- Logout Section -->
					<div class="logout-section">
						<button class="logout-btn" on:click={logout}>Log out</button>
					</div>

					<!-- Copyright -->
					<div class="copyright-section">
						<p class="copyright-text">©Cercino 2026 BETA v.1</p>
					</div>
				</div>
			</div>
		</main>
	{/if}

	<!-- Bottom Navigation -->
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
</div>

<style>
	.app {
		min-height: 100vh;
		background: #000000;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		display: flex;
		flex-direction: column;
		padding-bottom: 100px; /* Increased to ensure content doesn't hide behind nav */
		touch-action: manipulation;
	}

	.page-header {
		background: #2a2a2a;
		padding: 1rem;
		border-bottom: 1px solid #3a3a3a;
	}

	.page-header h1 {
		margin: 0;
		font-size: 1.5rem;
		color: white;
	}

	.page-header button {
		background: #3a3a3a;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 0;
		cursor: pointer;
		margin-bottom: 1rem;
	}

	/* Fixed Search and Categories Section */
	.search-categories-section {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: #000000;
		border-bottom: none;
		z-index: 1000;
		padding: 0.75rem 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	.search-bar {
		display: flex;
		align-items: center;
		background: #000000;
		border: 1px solid #333333;
		border-radius: 0;
		height: 2rem;
		padding: 0 0.8rem;
		gap: 0.5rem;
	}

	.search-icon {
		width: 16px;
		height: 16px;
		filter: brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
		flex-shrink: 0;
	}

	.search-bar input {
		flex: 1;
		padding: 0;
		background: transparent;
		border: none;
		color: white;
		font-size: 16px;
		outline: none;
		box-sizing: border-box;
		height: 100%;
	}

	.search-bar input::placeholder {
		color: #999;
	}

	.search-bar:focus-within {
		background: #111111;
		border-color: #555555;
	}

	.categories {
		margin-top: 0.5rem;
	}

	.category-filters {
		display: flex;
		gap: 0.2rem;
		overflow-x: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
		padding-bottom: 0.25rem;
	}

	.category-filters::-webkit-scrollbar {
		display: none;
	}

	.category-filters button {
		padding: 0.4rem 0.8rem;
		border: 1px solid #333333;
		background: #000000;
		color: white;
		border-radius: 7px;
		cursor: pointer;
		white-space: nowrap;
		flex-shrink: 0;
		transition: all 0.2s ease;
		font-size: 0.85rem;
		font-weight: 500;
	}

	.category-filters button:hover {
		background: #111111;
		border-color: #555555;
		transform: translateY(-1px);
	}

	.category-filters button.active {
		background: #F16CB3;
		color: white;
	}


	.trending {
		padding: 0.5rem 1rem;
		margin-top: 5rem;
	}

	.trending h2 {
		color: white;
		margin-bottom: 1rem;
	}

	.events-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1rem;
	}

	.event-card {
		background: #000000;
		border-radius: 7px;
		overflow: hidden;
		cursor: pointer;
		transition: transform 0.2s ease;
		height: 200px;
	}

	.event-card:hover {
		transform: translateY(-2px);
	}

	.event-image {
		position: relative;
		width: 100%;
		overflow: hidden;
		display: inline-block;
	}

	.event-image::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.35);
		z-index: 1;
	}

	.event-image img {
		width: 100%;
		height: auto;
		object-fit: cover;
		display: block;
	}

	.event-company {
		position: absolute;
		top: 1rem;
		right: 1rem;
		color: white;
		padding: 0.5rem 1rem;
		font-size: 0.9rem;
		font-weight: 500;
		border-radius: 0;
		z-index: 2;
	}

	.event-overlay {
		position: absolute;
		bottom: 0;
		left: 10px;
		right: 0;
		top: 50%;
		padding: 0.5rem;
		color: white;
		height: 60px;
		z-index: 2;
		display: block !important;
		visibility: visible !important;
	}

	.event-title {
		font-size: 1.2rem;
		font-weight: bold;
		margin: 0 0 0.3rem 0;
		color: white !important;
		line-height: 1.2;
		display: block !important;
		visibility: visible !important;
	}

	.event-description {
		font-size: 0.9rem;
		line-height: 1.2;
		margin: 0;
		color: white !important;
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block !important;
		visibility: visible !important;
	}



	.buy-ticket-btn:hover {
		background: #ff8bb3;
	}

	/* New Event Page Styles */
	.event-page {
		background: #000000;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.event-hero {
		width: 100%;
		height: 40vh;
		overflow: hidden;
	}

	.event-hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.event-content {
		flex: 1;
		padding: 2rem 1rem;
		background: #000000;
		color: white;
	}

	.event-content .event-title {
		font-size: 1.6rem;
		font-weight: bold;
		margin: 0 0 1rem 0;
		color: white;
	}

	.event-content .event-description {
		font-size: 0.9rem;
		line-height: 1.5;
		margin: 0 0 2rem 0;
		color: white;
	}

	.section-title {
		font-size: 1.2rem;
		font-weight: bold;
		margin: 2rem 0 1rem 0;
		color: white;
	}

	.section-content {
		font-size: 0.9rem;
		line-height: 1.5;
		margin: 0 0 1rem 0;
		color: white;
	}

	.ticket-purchase-bar {
		position: fixed;
		bottom: 80px; /* Above bottom navigation */
		left: 0;
		right: 0;
		background: #000000;
		border-top: 1px solid #333333;
		padding: 0.5rem 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
		height: 60px;
		box-sizing: border-box;
	}

	.price-section {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.price-controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.quantity-btn {
		background: #333333;
		color: white;
		border: none;
		width: 28px;
		height: 28px;
		border-radius: 0;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.quantity-btn:hover {
		background: #555555;
	}

	.quantity {
		font-size: 1rem;
		font-weight: bold;
		color: white;
		min-width: 20px;
		text-align: center;
	}

	.price-info {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.price {
		font-size: 1.2rem;
		font-weight: bold;
		color: white;
	}

	.per-ticket {
		font-size: 0.75rem;
		color: #999999;
	}

	.ticket-purchase-bar .buy-ticket-btn {
		background: #F16CB3;
		color: white;
		border: none;
		padding: 0.6rem 1.2rem;
		border-radius: 0;
		font-size: 0.95rem;
		font-weight: bold;
		cursor: pointer;
		transition: background 0.2s ease;
		min-width: 100px;
		height: 36px;
	}

	.ticket-purchase-bar .buy-ticket-btn:hover {
		background: #F16CB3;
	}


	.event-image {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 0;
		margin-bottom: 1rem;
	}



	.checkout-content {
		padding: 1rem;
	}

	.cart-item {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		background: #2a2a2a;
		border-radius: 0;
		margin-bottom: 1rem;
	}

	.cart-item img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		border-radius: 0;
	}

	.cart-item h3 {
		color: white;
		margin: 0 0 0.5rem 0;
	}

	.cart-item p {
		color: #ccc;
		margin: 0.25rem 0;
	}

	.payment-section {
		background: #2a2a2a;
		padding: 1rem;
		border-radius: 0;
		margin-top: 1rem;
	}

	.payment-section h2 {
		color: white;
		margin-bottom: 1rem;
	}

	.payment-methods {
		display: flex;
		gap: 0.5rem;
		margin: 1rem 0;
	}

	.payment-btn {
		flex: 1;
		padding: 0.75rem;
		border: none;
		background: #3a3a3a;
		color: white;
		border-radius: 0;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.payment-btn:hover {
		background: #4a4a4a;
	}

	.payment-btn.active {
		background: #F16CB3;
		color: white;
	}

	.user-info {
		margin: 1rem 0;
	}

	.user-info h3 {
		color: white;
		margin-bottom: 1rem;
	}

	.user-info input {
		width: 100%;
		padding: 0.75rem;
		margin: 0.5rem 0;
		border: none;
		background: #3a3a3a;
		color: white;
		border-radius: 0;
		box-sizing: border-box;
		outline: none;
	}

	.user-info input::placeholder {
		color: #999;
	}

	.user-info input:focus {
		background: #4a4a4a;
	}

	.purchase-btn {
		width: 100%;
		background: #F16CB3;
		color: white;
		border: none;
		padding: 1rem;
		border-radius: 0;
		font-size: 1.1rem;
		cursor: pointer;
		margin-top: 1rem;
		transition: background 0.2s ease;
	}

	.purchase-btn:hover {
		background: #F16CB3;
	}

	.profile-page {
		background: #000000;
		height: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
		box-sizing: border-box;
	}

	.profile-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.logo-section {
		margin-bottom: 0.5rem;
		display: flex;
		justify-content: center;
	}

	.main-logo {
		width: 60%;
		height: auto;
		object-fit: contain;
	}

	.settings-section {
		width: 100%;
		max-width: 400px;
		margin-bottom: 0.5rem;
	}

	.settings-title {
		color: white;
		font-size: 1.5rem;
		font-weight: lighter;
		margin: 0 0 1rem 0;
		text-align: left;
	}

	.settings-card {
		background: #1C1C1C;
		border-radius: 7px;
		padding: 1rem;
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
	}

	.setting-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 0;
		border-bottom: 1px solid #000000;
	}

	.setting-row:last-child {
		border-bottom: none;
	}

	.setting-label {
		color: white;
		font-size: 0.9rem;
	}

	.setting-value {
		color: white;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.setting-label.name-age {
		opacity: 0.5;
	}

	.setting-value.name-age {
		opacity: 0.5;
	}

	.change-btn {
		background: #F16CB3;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 500;
		cursor: pointer;
		transition: background 0.2s;
	}

	.change-btn:hover {
		background: #e55ba0;
	}

	.bottom-section {
		display: flex;
		flex-direction: column;
		padding-top: 20%;
		align-items: center;
		justify-content: flex-end;
		flex: 1;
		gap: 5rem;
		padding-bottom: 0.5rem;
	}

	.logout-section {
		margin-bottom: 0;
	}

	.logout-btn {
		background: transparent;
		color: #F16CB3;
		border: none;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		transition: color 0.2s;
		padding: 0.5rem 1rem;
	}

	.logout-btn:hover {
		color: #e55ba0;
	}

	.copyright-section {
		margin-top: 0;
	}

	.copyright-text {
		color: white;
		font-size: 0.8rem;
		text-align: center;
		margin: 0;
		opacity: 0.7;
	}

	.tickets-page {
		background: #000000;
		min-height: 100vh;
		padding: 1rem;
	}

	.ticket-tabs {
		display: flex;
		margin: 0 0 1rem 0;
		background: #2a2a2a;
		border-radius: 7px;
		padding: 0.25rem;
		gap: 0.25rem;
	}

	.tab-btn {
		flex: 1;
		padding: 0.75rem 1rem;
		border: none;
		background: transparent;
		color: #666666;
		cursor: pointer;
		transition: all 0.2s ease;
		border-radius: 5px;
		font-weight: 500;
	}

	.tab-btn:hover {
		background: #3a3a3a;
		color: white;
	}

	.tab-btn.active {
		background: #1C1C1C;
		color: white;
	}

	.ticket-detail-card {
		background: #000000;
		padding: 0;
		margin-bottom: 1rem;
		border-bottom: 1px solid #333333;
		padding-bottom: 1rem;
	}

	.next-ticket-text {
		color: #F16CB3;
		font-size: 0.85rem;
		font-weight: 500;
	}

	.next-ticket-date {
		color: #F16CB3;
		font-weight: bold;
	}

	.no-tickets {
		text-align: center;
		padding: 2rem;
		color: #666;
	}

	.qr-code-section {
		display: flex;
		justify-content: center;
		background: #000000;
		border-radius: 7px;
	}

	.qr-code {
		width: 280px;
		height: 280px;
		object-fit: contain;
		filter: brightness(0) invert(1);
	}

	.ticket-details {
		padding: 1rem 0;
		color: white;
	}

	.event-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.event-name {
		font-size: 1.5rem;
		font-weight: bold;
		margin: 0;
		color: white;
	}

	.quantity {
		font-size: 1rem;
		color: white;
		font-weight: 500;
	}

	.attendee-info {
		margin-bottom: 1rem;
	}

	.attendee-name {
		font-size: 1rem;
		margin: 0 0 0.25rem 0;
		color: white;
	}

	.attendee-age {
		font-size: 0.9rem;
		margin: 0;
		color: white;
	}

	.date-info {
		text-align: right;
	}

	.attendance-date,
	.bought-date {
		font-size: 0.9rem;
		margin: 0.25rem 0;
		color: white;
	}

	.location-section {
		margin: 1rem 0 0.5rem 0;
	}

	.location-title {
		font-size: 1.2rem;
		font-weight: bold;
		margin: 0 0 0.5rem 0;
		color: white;
	}

	.map-container {
		border-radius: 7px;
		overflow: hidden;
		background: #2a2a2a;
	}

	.map-container iframe {
		border-radius: 7px;
	}

	.info-text {
		font-size: 0.9rem;
		color: white;
		text-align: center;
		margin: 1rem 0 0.5rem 0;
		opacity: 0.8;
	}


	.tickets-history {
		padding: 0;
	}

	.history-ticket-card {
		background: transparent;
		border-radius: 7px;
		margin-bottom: 1rem;
		overflow: hidden;
	}

	.history-image-section {
		position: relative;
		width: 100%;
		height: 8vh;
		overflow: hidden;
		border-radius: 7px;
		cursor: pointer;
	}

	.history-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.history-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		align-items: flex-start;
		padding: 1rem;
	}

	.history-title {
		color: white;
		font-size: 1.2rem;
		font-weight: bold;
		margin: 0;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
	}

	.history-text-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 0;
		background: transparent;
		margin-top: 0.5rem;
	}

	.status-text {
		color: white;
		font-size: 0.9rem;
		font-weight: 500;
		margin: 0;
	}

	.support-text {
		color: white;
		font-size: 0.8rem;
		font-weight: 400;
		margin: 0;
	}

	.history-expanded-content {
		background: #2a2a2a;
		padding: 1rem;
		border-radius: 0 0 7px 7px;
		animation: expandDown 0.3s ease-out;
	}

	.expanded-details {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.detail-row {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.detail-label {
		color: white;
		font-size: 0.8rem;
		font-weight: 500;
		text-transform: uppercase;
	}

	.detail-value {
		color: white;
		font-size: 0.9rem;
		font-weight: 400;
	}

	.detail-quantity {
		color: white;
		font-size: 2rem;
		font-weight: bold;
		margin: 0.5rem 0;
	}

	@keyframes expandDown {
		from {
			opacity: 0;
			max-height: 0;
		}
		to {
			opacity: 1;
			max-height: 200px;
		}
	}

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
		height: 80px; /* Fixed height to ensure visibility */
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

	.nav-item:hover {
		color: #F16CB3;
	}

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
		.app {
			max-width: 500px;
			margin: 0 auto;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
		}

		.search-categories-section {
			max-width: 500px;
			left: 50%;
			transform: translateX(-50%);
		}

		.trending {
			margin-top: 5rem;
		}

		.events-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			gap: 1.5rem;
		}

		.event-card img {
			height: 200px;
		}

	}

	@media (min-width: 1024px) {
		.app {
			max-width: 600px;
		}

		.search-categories-section {
			max-width: 600px;
		}

		.trending {
			margin-top: 5rem;
		}

		.events-grid {
			grid-template-columns: 1fr;
		}

		.event-card img {
			height: 200px;
		}

	}
</style>