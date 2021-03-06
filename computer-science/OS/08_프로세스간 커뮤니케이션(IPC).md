## 프로세스간 커뮤니케이션

### - InterProcess Communication (IPC)

---

### 왜 프로세스간 통신이 필요한가요?

- 성능을 높이기 위해 여러 프로세스를 만들어서 동시 실행
- 이 때 프로세스간 상태 확인 및 데이터 송수신이 필요
- Ex] CPU core 8 ~ 64개

### 가볍게 생각해보기

- 웹서버 예
- 웹서버 만들기

  - 웹서버란? 요청이 오면 HTML 파일을 클라이언트에 제공하는 프로그램
  - 새로운 사용자 요청이 올 때마다 fork() 함수로 새로운 프로세스를 만들고, 각 사용자 요청에 즉시 대응

> CPU 병렬처리가 가능하다면 더 빠른 대응이 가능
> 단, 이 때 각 프로세스 제어 및 상태 정보 교환을 위해 프로세스간 통신 필요

---

### 프로세스간 커뮤니케이션

> 프로세스들이 서로의 공간을 쉽게 접근할 수 있다면? -- 프로세스 데이터/코드가 바뀔 수 있으니 얼마나 위험할까?

- 프로세스는 다른 프로세스의 공간을 접근할 수 없다.
<center><image src='./images/IPC-1.png' width=700 /></center>

> 프로세스간 커뮤니케이션을 해야한다면 어떻게 해야할까?

- 프로세스간 통신 방법을 제공함
- IPC: InterProcess Communication
  - 그 중 한가지 방법: file 사용
    > 간단히 다른 프로세스에 전달할 내용을 파일에 쓰고, 다른 프로세스가 해당 파일을 읽으면 됨

---

### 프로세스간 커뮤니케이션

- file을 사용하면 실시간으로 직접 원하는 프로세스에 데이터 전달이 어려움
  - 왜? 해당 프로세스가 파일을 읽어야 하는데, 계속 실시간으로 읽고만 있을 수 없다.
  - 계속 pulling 하고 있을 수도 없고, 저장매체 접근시 시스템콜을 써서 파일을 오픈하고, 사용자모드에서 커널모드로 바꾸고, 스케쥴러에서 현재 프로세는 block 으로 바뀌고, interrupt 발생시키고, 또 파일읽기 프로세스는 running 상태로 바뀌고.... 너무 힘들어...
    > 그래서 보다 다양한 IPC 기법이 있음

---

### 실제 프로세스: 리눅스 예

<center><image src='./images/process-linux.png' width=500 /></center>

- 하나의 프로세스는 가상메모리 4Gb를 갖는다
- 0Gb ~ 3Gb는 사용자 공간 / 3Gb ~ 4Gb는 커널공간
- 사용자 모드에서는 커널공간 접근 불가

---

### 실제 프로세스: 리눅스 예

<center><image src='./images/process-linux-2.png' width=600 /></center>

- 프로세스마다 커널공간을 갖으면 낭비 아닌가요?
- 실제 물리메모리에 들어갈 때는 커널 공간을 공유한다.
- **따라서 프로세스간 사용자 공간은 접근할 수 없지만 커널 공간은 공유한다.**

---

### 다양한 IPC 기법

- IPC: Interprocess Communication

1. file 사용 (실시간X, 저장매체 용으로 시간 비용 높음)
2. Message Queue
3. Shared Memory
4. Pipe
5. Signal
6. Semaphore
7. Socket
   ...

> **2번부터는 모두 커널 공간을 사용하는 것임** - 이것이 핵심

---

### 정리

- 여러 프로세스 동시 실행을 통한 성능 개선, 복잡한 프로그램을 위해 프로세스간 통신 필요
- 프로세스간 공간이 완전 분리
- 프로세스간 통신을 위한 특별한 기법 필요
  - IPC(Interprocess Communication)
- 대부분의 IPC 기법은 결국 커널 공간을 활용하는 것
  - 이유: 커널 공간은 공유하기 때문
