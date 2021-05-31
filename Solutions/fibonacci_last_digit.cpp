#include<bits/stdc++.h>
#include <iostream>

int get_fibonacci_last_digit(long long n) {
    int a = 0;
    int b = 1;

    int res;

    for (int i = 2; i <= n; i++) {
        res = (a + b) % 10;
        a = b;
        b = res;
    }

    return res;
}

int main() {
    int n;
    std::cin >> n;
    int c = get_fibonacci_last_digit(n);
    std::cout << c << '\n';

    return 0;
}
