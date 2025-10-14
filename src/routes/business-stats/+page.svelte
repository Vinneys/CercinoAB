<script>
	import BottomNav from '$lib/components/BottomNav.svelte';
	import CercinoMainLogo from '$lib/assets/CercinoMainLogo.png';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="business-stats-page desktop-container">
	<!-- Currency Cards -->
	<div class="currency-cards-container">
		<div class="currency-card desktop-card currency-card-left bank-card">
			<div class="card-header">
				<div class="card-brand">CERCINO</div>
			</div>
			<div class="card-content">
				<div class="balance-section">
					<div class="balance-display">52.203kr</div>
					<div class="card-number-display">5282 3456 7890 1289</div>
					<div class="card-details">
						<div class="card-holder">
							<div class="card-label">CARD HOLDER</div>
							<div class="card-name">JOHN DOE</div>
						</div>
						<div class="card-expiry-section">
							<div class="card-label">VALID THRU</div>
							<div class="card-expiry">09/25</div>
						</div>
					</div>
				</div>
				<div class="card-graphic">
					<img src={CercinoMainLogo} alt="Cercino Logo" class="logo-image" />
				</div>
			</div>
		</div>

		<div class="currency-card desktop-card currency-card-right">
			<div class="card-header">
				<span class="card-title">Overall Statistics</span>
			</div>
			<div class="card-content">
				<div class="balance-section">
					<div class="stats-grid">
						<div class="stat-item">
							<div class="stat-label">Income</div>
							<div class="stat-value income">+127.5kr</div>
						</div>
						<div class="stat-item">
							<div class="stat-label">Outcome</div>
							<div class="stat-value outcome">-75.3kr</div>
						</div>
						<div class="stat-item">
							<div class="stat-label">Profit</div>
							<div class="stat-value profit">+52.2kr</div>
						</div>
						<div class="stat-item">
							<div class="stat-label">Events</div>
							<div class="stat-value events">12</div>
						</div>
					</div>
				</div>
				<div class="card-graphic">
					<img src={CercinoMainLogo} alt="Cercino Logo" class="logo-image" />
				</div>
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<div class="main-content desktop-grid">
		<!-- Payout Section -->
		<div class="payout-section">
			<Button variant="primary" size="md">Payout</Button>
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

	/* Currency Cards Container */
	.currency-cards-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	/* Currency Card */
	.currency-card {
		background: #F16CB3;
		border-radius: 15px;
		margin: 1rem auto;
		padding: 1.5rem;
		position: relative;
		overflow: hidden;
		font-family: 'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		width: 45vh;
		height: 22vh;
	}

	/* Black shadow overlay on ONLY the left card */
	.currency-card-left::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		background:
			linear-gradient(135deg,
				rgba(0,0,0,0.4) 0%,
				rgba(0,0,0,0.2) 30%,
				rgba(0,0,0,0.1) 60%,
				rgba(0,0,0,0.0) 100%),
			radial-gradient(70% 70% at 80% 20%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.0) 70%);
		border-radius: 15px;
		z-index: 0; /* place shadow behind content */
	}

	/* Ensure all content sits above the overlay */
	.currency-card-left > * {
		position: relative;
		z-index: 1;
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

	/* Bank Card Styles */
	.bank-card .card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.card-brand {
		font-size: 1.2rem;
		font-weight: bold;
		color: white;
		letter-spacing: 2px;
	}

	.card-type {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.7);
		font-weight: 500;
		letter-spacing: 1px;
	}

	.card-number-display {
		font-size: 1.3rem;
		font-weight: lighter;
		color: white;
		letter-spacing: 3px;
		margin-bottom: 1.5rem;
		font-family: 'Courier New', monospace;
	}

	.bank-card .card-details {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1.5rem;
	}

	.card-holder, .card-expiry-section {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.card-label {
		font-size: 0.7rem;
		color: rgba(255, 255, 255, 0.6);
		font-weight: 500;
		letter-spacing: 1px;
	}

	.card-name {
		font-size: 0.9rem;
		color: white;
		font-weight: lighter;
		letter-spacing: 1px;
	}

	.balance-display {
		font-size: 1.2rem;
		font-weight: lighter;
		color: white;
		text-align: left;
		margin-bottom: 1rem;
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

	/* Statistics Grid */
	.stats-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
	}

	.stat-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.stat-label {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.7);
		font-weight: 500;
	}

	.stat-value {
		font-size: 1.1rem;
		font-weight: lighter;
		color: white;
	}

	.stat-value.income {
		color: #00ff88;
	}

	.stat-value.outcome {
		color: #cc0000;
	}

	.stat-value.profit {
		color: #0066cc;
	}

	.stat-value.events {
		color: #ffff00;
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

	/* Desktop Responsive Styles */
	@media (min-width: 768px) {
		.business-stats-page {
			max-width: 1200px;
			margin: 0 auto;
			padding: 0 2rem;
		}

		.currency-cards-container {
			flex-direction: row;
			gap: 2rem;
			margin: 2rem 0;
		}

		.currency-card {
			margin: 0;
			padding: 2.5rem;
			border-radius: 20px;
			box-shadow: 0 8px 32px rgba(241, 108, 179, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2);
			border: 1px solid rgba(255, 255, 255, 0.3);
			backdrop-filter: blur(10px);
			width: 65vh !important;
			height: 32vh !important;
		}

		.currency-card-left {
			margin-left: 0 !important;
			margin-right: auto !important;
		}

		.currency-card-right {
			margin-left: auto !important;
			margin-right: 0 !important;
		}

		.balance-amount {
			font-size: 4rem;
		}

		.card-details {
			font-size: 1.1rem;
		}

		/* Bank Card Desktop Styles removed per request to restore original typography */

		.stats-grid {
			gap: 1rem;
			margin-bottom: 1rem;
		}

		.stat-label {
			font-size: 0.9rem;
		}

		.stat-value {
			font-size: 1.3rem;
		}

		.logo-image {
			width: 80px;
			height: 80px;
		}

		/* Smaller logo only on bank card */
		.bank-card .logo-image {
			width: 48px;
			height: 48px;
		}

		.main-content {
			padding: 0;
		}

		.section-title {
			font-size: 1.8rem;
			/* margin-bottom: 2rem; */
		}

		.event-item {
			padding: 2rem;
			border-radius: 15px;
			margin-bottom: 1.5rem;
			background: rgba(28, 28, 28, 0.6);
			backdrop-filter: blur(10px);
			transition: all 0.3s ease;
		}

		.event-item:hover {
			transform: translateY(-5px);
			box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
		}

		.event-chart {
			margin: 0 2rem;
		}

		.chart-svg {
			height: 30px;
		}

		.event-amount {
			font-size: 1.3rem;
		}

		.event-tickets {
			font-size: 0.9rem;
		}
	}

	@media (min-width: 1024px) {
		.business-stats-page {
			max-width: 1600px;
			padding: 0 2rem;
		}

		/* Full-width single column on desktop with margins */
		.main-content {
			display: block;
			padding-bottom: 2rem;
		}

		/* apply consistent horizontal margins to sections */
		.payout-section,
		.premium-section,
		.events-section {
			margin-left: 2rem;
			margin-right: 2rem;
		}

		.currency-cards-container {
			margin: 3rem 2rem 2rem 2rem;
			gap: 2rem;
		}

		.currency-card {
			margin: 0;
			padding: 2rem;
			min-height: 220px;
			border-radius: 24px;
			box-shadow: 0 12px 40px rgba(241, 108, 179, 0.4), 0 6px 20px rgba(0, 0, 0, 0.25);
			border: 1px solid rgba(255, 255, 255, 0.4);
			backdrop-filter: blur(15px);
			width: 65vh !important;
			height: 32vh !important;
		}

		.currency-card-left {
			margin-left: 0 !important;
			margin-right: auto !important;
		}

		.currency-card-right {
			margin-left: auto !important;
			margin-right: 0 !important;
		}

		.balance-amount {
			font-size: 3.8rem;
		}

		.card-details {
			font-size: 1.05rem;
		}

		/* Bank Card 1024px+ Styles removed per request */

		.stats-grid {
			gap: 1.2rem;
			margin-bottom: 1.2rem;
		}

		.stat-label {
			font-size: 1rem;
		}

		.stat-value {
			font-size: 1.4rem;
		}

		.logo-image {
			width: 80px;
			height: 80px;
		}

		/* Smaller logo only on bank card */
		.bank-card .logo-image {
			width: 52px;
			height: 52px;
		}

		.section-title {
			font-size: 2rem;
			/* margin-bottom: 2.5rem; */
		}

		.event-item {
			padding: 2.5rem;
		}

		.event-chart {
			margin: 0 3rem;
		}

		.chart-svg {
			height: 35px;
		}

		.event-amount {
			font-size: 1.4rem;
		}
	}

	@media (min-width: 1440px) {
		.business-stats-page {
			max-width: 1920px;
			padding: 0 3rem;
		}

		/* Full-width with larger margins on very wide screens */
		.payout-section,
		.premium-section,
		.events-section {
			margin-left: 3rem;
			margin-right: 3rem;
		}

		.currency-cards-container {
			margin: 1rem 3rem 3rem 3rem;
			gap: 2rem;
		}

		.currency-card {
			margin: 0;
			border-radius: 28px;
			box-shadow: 0 16px 48px rgba(241, 108, 179, 0.5), 0 8px 24px rgba(0, 0, 0, 0.3);
			border: 1px solid rgba(255, 255, 255, 0.5);
			backdrop-filter: blur(20px);
			width: 50vh !important;
			height: 26vh !important;
		}

		.currency-card-left {
			margin-left: 0 !important;
			margin-right: auto !important;
		}

		.currency-card-right {
			margin-left: auto !important;
			margin-right: 0 !important;
		}

		.balance-amount {
			font-size: 4.2rem;
		}

		.card-details {
			font-size: 1.15rem;
		}

		/* Bank Card 1440px+ Styles removed per request */

		.stats-grid {
			gap: 1.5rem;
			margin-bottom: 1.5rem;
		}

		.stat-label {
			font-size: 1.1rem;
		}

		.stat-value {
			font-size: 1.5rem;
		}

		.logo-image {
			width: 90px;
			height: 90px;
		}

		/* Smaller logo only on bank card */
		.bank-card .logo-image {
			width: 56px;
			height: 56px;
		}

		.section-title {
			font-size: 2.2rem;
			/* margin-bottom: 3rem; */
		}

		.event-item {
			padding: 3rem;
		}

		.event-chart {
			margin: 0 4rem;
		}

		.chart-svg {
			height: 40px;
		}

		.event-amount {
			font-size: 1.5rem;
		}
	}
</style>
