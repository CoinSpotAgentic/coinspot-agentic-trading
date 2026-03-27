# coinspot-agentic-trading

An OpenClaw skill for trading cryptocurrency on CoinSpot.

## Features

- Discover available assets and check current coin prices
- View portfolio balances and transaction history
- Get instant buy/sell/swap quotes
- Execute trades with mandatory user approval
- Natural language trading commands (e.g. "sell all my ETH and buy BTC")
- Price alerts and monitoring on request

## Requirements

- Node.js 18 or later
- OpenClaw installed and running
- CoinSpot Agentic API key and secret

## Installation

### 1. Clone to OpenClaw skills directory

```bash
cd ~/.openclaw/skills
git clone https://github.com/CoinSpotAgentic/coinspot-agentic-trading.git
```

### 2. Install dependencies

```bash
cd ~/.openclaw/skills/coinspot-agentic-trading
npm install
```

### 3. Configure environment variables

Add your CoinSpot Agentic API credentials as environment variables:
```bash
export COINSPOT_API_KEY="your-api-key"
export COINSPOT_API_SECRET="your-api-secret"
```

### 4. Refresh OpenClaw

Restart OpenClaw to pick up the new skill and API credentials:

```bash
openclaw gateway restart
```

## Usage

Once installed, the skill is automatically available to the OpenClaw agent. Simply ask it about crypto in natural language:

- "What's the current price of BTC?"
- "Show me my portfolio"
- "Buy $100 worth of Ethereum"
- "Sell all my DOGE and swap it for BTC"
- "Alert me if SOL drops below $200"

The agent is instructed to always present a quote and ask for your approval before executing any trade.

## API Key Limits

CoinSpot Agentic API keys can be configured with per-transaction and daily trade limits. These limits are enforced server-side — the agent will report any limit errors clearly.

## License

MIT
