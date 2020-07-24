"use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  createId() {
    let result = "";
    const words =
      "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    for (let i = 0; i < 10; i += 1) {
      const position = Math.floor(Math.random() * (words.length - 1));
      result = result + words.substring(position, position + 1);
    }
    return result;
  },

  createTransaction(amount, type) {
    let id = this.createId();
    const currentTransaction = { id, type, amount };
    console.log(currentTransaction);

    return currentTransaction;
  },

  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    return (this.balance += amount);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return `Cнятие ${amount} невозможно, недостаточно средств`;
    }
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW)
    );
    return (this.balance -= amount);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
      return `Нет такой транзакции`;
    }
  },

  getTransactionTotal(type) {
    let totalDeposit = 0;
    let totalWithdraw = 0;
    for (const transaction of this.transactions) {
      transaction.type === Transaction.DEPOSIT
        ? (totalDeposit += transaction.amount)
        : (totalWithdraw += transaction.amount);
    }
    return type === Transaction.DEPOSIT
      ? `total ${type} = ${totalDeposit}`
      : `total ${type} = ${totalWithdraw}`;
  },
};

// Вызовы функции для проверки работоспособности реализации:

console.log(account.deposit(1200));
console.log(account.deposit(120));
console.log(account.withdraw(150));
console.log(account.withdraw(2150));
console.log(account.getTransactionTotal("deposit"));
console.log(account.getTransactionTotal("withdraw"));
console.log(account.getBalance());
