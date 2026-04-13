import sys

# 1. 입력 속도를 높이기 위해 sys.stdin.readline 사용
n = int(sys.stdin.readline())

# 2. 숫자의 범위가 1~10,000이므로, 각 숫자의 등장 횟수를 저장할 리스트 생성
# 인덱스 10,000까지 필요하므로 크기는 10,001
count = [0] * 10001

# 3. 입력을 받자마자 해당 숫자의 인덱스 값을 1 증가 (메모리 절약)
for _ in range(n):
    num = int(sys.stdin.readline())
    count[num] += 1

# 4. 1부터 10,000까지 등장한 횟수만큼 반복 출력
for i in range(10001):
    if count[i] != 0:
        for _ in range(count[i]):
            sys.stdout.write(str(i) + '\n')