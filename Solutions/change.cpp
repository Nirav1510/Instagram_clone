#include <iostream>

int get_change(int m) {
   
	int n,a,b,c;

	a=m/10;
	b=(m%10)/5;
	c=m-(a*10)-(b*5);
	n=a+b+c;
  return n;
}

int main() {
  int m;
  std::cin >> m;
  std::cout << get_change(m) << '\n';

  return 0;
}
