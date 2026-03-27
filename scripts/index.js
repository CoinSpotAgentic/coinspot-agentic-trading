'use strict';

const { CoinSpot } = require('coinspot-sdk-nodejs');

const _client = new CoinSpot({
  apiKey:    process.env.COINSPOT_API_KEY,
  apiSecret: process.env.COINSPOT_API_SECRET,
});

// Balances
const getAllBalances = () => _client.getMyBalances();
const getCoinBalance = (coin) => _client.getMyCoinBalance(coin.toUpperCase());

// Quotes
const getBuyQuote = (coin, amount, amounttype) => _client.getBuyNowQuote(coin.toUpperCase(), amount, amounttype.toLowerCase());
const getSellQuote = (coin, amount, amounttype) => _client.getSellNowQuote(coin.toUpperCase(), amount, amounttype.toLowerCase());
const getSwapQuote = (sellcoin, buycoin, amount) => _client.getSwapNowQuote(sellcoin.toUpperCase(), buycoin.toUpperCase(), amount);

// Trading (requires user approval)
const executeBuy = (coin, amount, amounttype) => _client.placeBuyNowOrder(coin.toUpperCase(), amounttype.toLowerCase(), amount);
const executeSell = (coin, amount, amounttype) => _client.placeSellNowOrder(coin.toUpperCase(), amounttype.toLowerCase(), amount);
const executeSwap = (sellcoin, buycoin, amount) => _client.placeSwapNowOrder(sellcoin.toUpperCase(), buycoin.toUpperCase(), amount);

// History
const getOrderHistory = (opts = {}) => _client.getMyOrderHistory(opts);
const getMarketOrderHistory = (opts = {}) => _client.getMyMarketOrderHistory(opts);
const getOpenLimitOrders = (coin) => _client.getMyOpenLimitOrders(coin);
const getSendReceiveHistory = (opts = {}) => _client.getMySendReceiveHistory(opts);
const getDepositHistory = (opts = {}) => _client.getMyDepositHistory(opts);
const getWithdrawalHistory = (opts = {}) => _client.getMyWithdrawalHistory(opts);

// Agentic Status & Limits
const checkAgenticStatus = () => _client.checkAgenticStatus();
const getAgenticLimits = () => _client.getAgenticLimits();

// Instant Buy/Sell Coin Lists
const getBuyNowCoinList = () => _client.getBuyNowCoinList();
const getSellNowCoinList = () => _client.getSellNowCoinList();

// Wallet
const getDepositAddress = (coin) => _client.getCoinDepositAddress(coin.toUpperCase());
const getWithdrawalDetails = (coin) => _client.getCoinWithdrawalDetails(coin.toUpperCase());

module.exports = {
  getAllBalances, getCoinBalance,
  getBuyQuote, getSellQuote, getSwapQuote,
  executeBuy, executeSell, executeSwap,
  checkAgenticStatus, getAgenticLimits,
  getBuyNowCoinList, getSellNowCoinList,
  getOrderHistory, getMarketOrderHistory, getOpenLimitOrders,
  getSendReceiveHistory, getDepositHistory, getWithdrawalHistory,
  getDepositAddress, getWithdrawalDetails,
};
