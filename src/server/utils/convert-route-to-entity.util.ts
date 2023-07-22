const mapping: Record<string, string> = {
  companies: 'company',
  expenses: 'expense',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
