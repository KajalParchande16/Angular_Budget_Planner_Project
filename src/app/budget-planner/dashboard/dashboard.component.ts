import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  router = inject(Router);
  // income
  lastMonthsIncome = ["january:$1000", "February:$2000", "March:$3000"];
  currentMonthIncome = "$4000";
  // Expense
  lastMonthsExpense = ["january:$1000", "February:$2000", "March:$3000"];
  currentMonthExpense = "$4000";
  // To-Do transactions
  todoTransaction = [
    { description: 'pay electrical bill' },
    { description: 'Buy Groceries' },
    { description: 'Submit Monthly Report' },
    { description: 'Call Insurance Company' },
  ]

  // Total
  totalCurrentMonthIncome = 12000;
  totalCurrentMonthExpense = 9000;

  viewIncome() {
    this.router.navigate(['budget-planner/view'])
  }
  viewExpense() {

  }
  viewToDo() {

  }

  get currentMonthSaving(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }
}
