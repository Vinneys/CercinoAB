<script>
	import BottomNav from '$lib/components/BottomNav.svelte';
	import CercinoMainLogo from '$lib/assets/CercinoMainLogo.png';
</script>

<div class="business-stats-page">
	<!-- Currency Card -->
	<div class="currency-card">
		<div class="card-header">
			<span class="card-title">Cercino Currency</span>
		</div>
		<div class="card-content">
			<div class="balance-section">
				<div class="balance-amount">52.203kr</div>
				<div class="card-details">
					<span class="card-number">5282 3456 7890 1289</span>
					<span class="card-expiry">09/25</span>
				</div>
			</div>
			<div class="card-graphic">
				<img src={CercinoMainLogo} alt="Cercino Logo" class="logo-image" />
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<div class="main-content">
		<!-- Payout Section -->
		<div class="payout-section">
			<h2 class="section-title">Payout</h2>
		</div>

		<!-- Premium Upgrade Section -->
		<div class="premium-section">
			<h2 class="section-title">Upgrade to premium</h2>
			<div class="premium-details">
				<div class="premium-line">-5kr/ticket</div>
				<div class="premium-line">up to 2 accounts</div>
			</div>
		</div>

		<!-- Current Event Section -->
		<div class="events-section">
			<h2 class="section-title">Current event</h2>
			<div class="event-item">
				<div class="event-info">
					<div class="event-name">Cercino Event</div>
					<div class="event-date">2025/09/10</div>
				</div>
				<div class="event-chart">
					<svg width="100%" height="20" viewBox="0 0 200 20" class="chart-svg">
						<path d="M10,18 Q30,3 50,15 Q70,2 90,12 Q110,5 130,16 Q150,1 170,10 Q190,4 190,4" stroke="white" stroke-width="2" fill="none" />
						<circle cx="10" cy="18" r="2" fill="white" />
						<circle cx="50" cy="15" r="2" fill="white" />
						<circle cx="90" cy="12" r="2" fill="white" />
						<circle cx="130" cy="16" r="2" fill="white" />
						<circle cx="170" cy="10" r="2" fill="white" />
					</svg>
				</div>
				<div class="event-stats">
					<div class="event-amount">23.455kr</div>
					<div class="event-tickets">231 Tickets</div>
				</div>
			</div>
			<div class="event-item">
				<div class="event-info">
					<div class="event-name">Cercino Event</div>
					<div class="event-date">2025/09/10</div>
				</div>
				<div class="event-chart">
					<svg width="100%" height="20" viewBox="0 0 200 20" class="chart-svg">
						<path d="M10,18 Q30,3 50,15 Q70,2 90,12 Q110,5 130,16 Q150,1 170,10 Q190,4 190,4" stroke="white" stroke-width="2" fill="none" />
						<circle cx="10" cy="18" r="2" fill="white" />
						<circle cx="50" cy="15" r="2" fill="white" />
						<circle cx="90" cy="12" r="2" fill="white" />
						<circle cx="130" cy="16" r="2" fill="white" />
						<circle cx="170" cy="10" r="2" fill="white" />
					</svg>
				</div>
				<div class="event-stats">
					<div class="event-amount">23.455kr</div>
					<div class="event-tickets">231 Tickets</div>
				</div>
			</div>
		</div>

		<!-- Separator -->
		<div class="section-separator"></div>

		<!-- Previous Events Section -->
		<div class="events-section">
			<h2 class="section-title">Previous events</h2>
			<div class="event-item">
				<div class="event-info">
					<div class="event-name">Cercino Event</div>
					<div class="event-date">2025/09/10</div>
				</div>
				<div class="event-chart">
					<svg width="100%" height="20" viewBox="0 0 200 20" class="chart-svg">
						<path d="M10,18 Q30,3 50,15 Q70,2 90,12 Q110,5 130,16 Q150,1 170,10 Q190,4 190,4" stroke="white" stroke-width="2" fill="none" />
						<circle cx="10" cy="18" r="2" fill="white" />
						<circle cx="50" cy="15" r="2" fill="white" />
						<circle cx="90" cy="12" r="2" fill="white" />
						<circle cx="130" cy="16" r="2" fill="white" />
						<circle cx="170" cy="10" r="2" fill="white" />
					</svg>
				</div>
				<div class="event-stats">
					<div class="event-amount">23.455kr</div>
					<div class="event-tickets">231 Tickets</div>
				</div>
			</div>
			<div class="event-item">
				<div class="event-info">
					<div class="event-name">Cercino Event</div>
					<div class="event-date">2025/09/10</div>
				</div>
				<div class="event-chart">
					<svg width="100%" height="20" viewBox="0 0 200 20" class="chart-svg">
						<path d="M10,18 Q30,3 50,15 Q70,2 90,12 Q110,5 130,16 Q150,1 170,10 Q190,4 190,4" stroke="white" stroke-width="2" fill="none" />
						<circle cx="10" cy="18" r="2" fill="white" />
						<circle cx="50" cy="15" r="2" fill="white" />
						<circle cx="90" cy="12" r="2" fill="white" />
						<circle cx="130" cy="16" r="2" fill="white" />
						<circle cx="170" cy="10" r="2" fill="white" />
					</svg>
				</div>
				<div class="event-stats">
					<div class="event-amount">23.455kr</div>
					<div class="event-tickets">231 Tickets</div>
				</div>
			</div>
			<div class="event-item">
				<div class="event-info">
					<div class="event-name">Cercino Event</div>
					<div class="event-date">2025/09/10</div>
				</div>
				<div class="event-chart">
					<svg width="100%" height="20" viewBox="0 0 200 20" class="chart-svg">
						<path d="M10,18 Q30,3 50,15 Q70,2 90,12 Q110,5 130,16 Q150,1 170,10 Q190,4 190,4" stroke="white" stroke-width="2" fill="none" />
						<circle cx="10" cy="18" r="2" fill="white" />
						<circle cx="50" cy="15" r="2" fill="white" />
						<circle cx="90" cy="12" r="2" fill="white" />
						<circle cx="130" cy="16" r="2" fill="white" />
						<circle cx="170" cy="10" r="2" fill="white" />
					</svg>
				</div>
				<div class="event-stats">
					<div class="event-amount">23.455kr</div>
					<div class="event-tickets">231 Tickets</div>
				</div>
			</div>
			<div class="event-item">
				<div class="event-info">
					<div class="event-name">Cercino Event</div>
					<div class="event-date">2025/09/10</div>
				</div>
				<div class="event-chart">
					<svg width="100%" height="20" viewBox="0 0 200 20" class="chart-svg">
						<path d="M10,18 Q30,3 50,15 Q70,2 90,12 Q110,5 130,16 Q150,1 170,10 Q190,4 190,4" stroke="white" stroke-width="2" fill="none" />
						<circle cx="10" cy="18" r="2" fill="white" />
						<circle cx="50" cy="15" r="2" fill="white" />
						<circle cx="90" cy="12" r="2" fill="white" />
						<circle cx="130" cy="16" r="2" fill="white" />
						<circle cx="170" cy="10" r="2" fill="white" />
					</svg>
				</div>
				<div class="event-stats">
					<div class="event-amount">23.455kr</div>
					<div class="event-tickets">231 Tickets</div>
				</div>
			</div>
			<div class="event-item">
				<div class="event-info">
					<div class="event-name">Cercino Event</div>
					<div class="event-date">2025/09/10</div>
				</div>
				<div class="event-chart">
					<svg width="100%" height="20" viewBox="0 0 200 20" class="chart-svg">
						<path d="M10,18 Q30,3 50,15 Q70,2 90,12 Q110,5 130,16 Q150,1 170,10 Q190,4 190,4" stroke="white" stroke-width="2" fill="none" />
						<circle cx="10" cy="18" r="2" fill="white" />
						<circle cx="50" cy="15" r="2" fill="white" />
						<circle cx="90" cy="12" r="2" fill="white" />
						<circle cx="130" cy="16" r="2" fill="white" />
						<circle cx="170" cy="10" r="2" fill="white" />
					</svg>
				</div>
				<div class="event-stats">
					<div class="event-amount">23.455kr</div>
					<div class="event-tickets">231 Tickets</div>
				</div>
			</div>
			<div class="event-item">
				<div class="event-info">
					<div class="event-name">Cercino Event</div>
					<div class="event-date">2025/09/10</div>
				</div>
				<div class="event-chart">
					<svg width="100%" height="20" viewBox="0 0 200 20" class="chart-svg">
						<path d="M10,18 Q30,3 50,15 Q70,2 90,12 Q110,5 130,16 Q150,1 170,10 Q190,4 190,4" stroke="white" stroke-width="2" fill="none" />
						<circle cx="10" cy="18" r="2" fill="white" />
						<circle cx="50" cy="15" r="2" fill="white" />
						<circle cx="90" cy="12" r="2" fill="white" />
						<circle cx="130" cy="16" r="2" fill="white" />
						<circle cx="170" cy="10" r="2" fill="white" />
					</svg>
				</div>
				<div class="event-stats">
					<div class="event-amount">23.455kr</div>
					<div class="event-tickets">231 Tickets</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Navigation -->
	<BottomNav />
</div>

<style>
	.business-stats-page {
		min-height: 100vh;
		background: #000000;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		display: flex;
		flex-direction: column;
		padding-bottom: 80px; /* Space for bottom nav */
	}

	/* Currency Card */
	.currency-card {
		background: #F16CB3;
		background: linear-gradient(147deg, rgba(241, 108, 179, 1) 61%, rgba(255, 255, 255, 1) 100%);
		border-radius: 15px;
		margin: 1rem;
		padding: 1.5rem;
		position: relative;
		overflow: hidden;
		font-family: 'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
	}

	.currency-card::before {
		content: '';
		position: absolute;
		top: -50%;
		right: -20%;
		width: 100px;
		height: 100px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
		animation: float 3s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-10px); }
	}

	.card-header {
		margin-bottom: 1rem;
	}

	.card-title {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.8);
		font-weight: 500;
	}

	.card-content {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.balance-section {
		flex: 1;
	}

	.balance-amount {
		font-size: 3.5rem;
		font-weight: lighter;
		color: white;
		margin-bottom: 0.75rem;
	}

	.card-details {
		display: flex;
		gap: 1rem;
		font-size: 1rem;
		color: white;
		font-weight: lighter;
	}

	.card-graphic {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.logo-image {
		width: 60px;
		height: 60px;
		object-fit: contain;
	}

	/* Main Content */
	.main-content {
		flex: 1;
		padding: 0 1rem;
	}

	.payout-section {
	}

	.premium-section {
		margin-bottom: 2rem;
		text-align: right;
	}

	.premium-details {
		margin-top: 0.5rem;
	}

	.premium-line {
		font-size: 0.9rem;
		color: white;
		margin-bottom: 0.25rem;
	}

	.section-title {
		font-size: 1.2rem;
		font-weight: bold;
		color: white;
		margin-bottom: 1rem;
	}

	.events-section {
		margin-bottom: 1.5rem;
	}

	.event-item {
		display: flex;
		align-items: center;
		padding: 1rem 0;
		border-bottom: 1px solid #333333;
	}

	.event-item:last-child {
		border-bottom: none;
	}

	.event-info {
		flex: 1;
		min-width: 0;
	}

	.event-name {
		font-size: 1rem;
		font-weight: 500;
		color: white;
		margin-bottom: 0.25rem;
	}

	.event-date {
		font-size: 0.8rem;
		color: #cccccc;
	}

	.event-chart {
		flex: 1;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 1rem;
	}

	.chart-svg {
		width: 100%;
		height: 20px;
	}

	.chart-svg path {
		stroke-dasharray: 0;
		animation: drawPath 2s ease-in-out;
	}

	.chart-svg circle {
		opacity: 0;
		animation: fadeInDots 2s ease-in-out 1s forwards;
	}

	@keyframes drawPath {
		0% {
			stroke-dasharray: 0 1000;
		}
		100% {
			stroke-dasharray: 1000 0;
		}
	}

	@keyframes fadeInDots {
		0% {
			opacity: 0;
			transform: scale(0);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	.event-stats {
		text-align: right;
		min-width: 80px;
	}

	.event-amount {
		font-size: 1rem;
		font-weight: bold;
		color: #F16CB3;
		margin-bottom: 0.25rem;
	}

	.event-tickets {
		font-size: 0.8rem;
		color: #F16CB3;
	}

	.section-separator {
		height: 1px;
		background: white;
		margin: 1rem 0;
	}
</style>
