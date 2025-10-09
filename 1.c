#include <stdio.h>
int func(int a, int b) {
	return a + b;
}

int main() {
	int a = 2, b = 8;
	int c = func(a, b);
	return 0;
}
