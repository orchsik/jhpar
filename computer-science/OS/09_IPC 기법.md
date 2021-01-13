### 파이프

- pipie(파이프)
  - 기본 파이프는 단방향 통신
  - fork()로 자식 프로세스를 만들었을 때, 부모와 자식간의 통신
  * 단방향? 부모에서는 write할 수 있고, 자식은 read만 할 수 있지. 반대방향은 불가능~
  <center><image src='./images/IPC-pipe.png' width=600 /></center>

---

### 파이프 코드 예제

- 참고
<center><image src='./images/IPC-pipe-code.png' width=700 /></center>

---

### 메시지큐(message queue)

- 큐니까 기본은 FIFO 정책으로 데이터 전송
  <center><image src='./images/IPC-pipe-code.png' width=700 /></center>
- 예제
  <center><image src='./images/IPC-messagequeue-1.png' width=700 /></center>

---

### 파이프와 메시지큐

- message queue는 부모/자식이 아니라, 어느 프로세스간에라도 데이터 송수신이 가능
  - key 값으로 Interprocess Communication 가능
- 먼저 넣은 데이터가 먼저 읽혀진다

### pipe VS message queue

- 부모/자식 프로세스간 only = pie / message queue는 상관없음.
- pipe는 단방향만 가능 / message queue는 양방향 가능

---

### IPC기법과 커널모드

> pipe, message queue 는 모두 kernel 공간의 메모리를 사용한다.

  <center><image src='./images/IPC-2.png' width=700 /></center>

> 메모리 공간도 kernel/user 로 구분됩니다.

---

### 공유 메모리(shared memory)

- 노골적으로 kernel space에 메모리 공간을 만들고 해당 공간을 변수처럼 쓰는 방식
- message queue처럼 FIFO 방식이 아니라 해당 메모리 주소를 마치 변수처럼 접근하는 방식
- 공유메모리 key를 가지고 여러 프로세스가 접근 가능
   <center><image src='./images/IPC-sharedMemory.png' width=700 /></center>

  ***

### 정리

1.  주요 IPC 기법

- pipe (단방향, 부모-자식 관계, fork()로 이뤄진 관계)
- message queue (key값을 가지고 양방향 프로세스간 통신)
- shared memory (커널에 메모리 공간을 만들고 공간의 key값을 프로세스들이 접근 가능)

2.  모두 커널 공간을 활용해서 프로세스간 데이터 공유

---

### 참고사항 (signal & socket)

> IPC 기법이지만 이외에도 많이 사용되는 두가지 기술

- 많이 사용되는 두가지!
  - 시그널(signal)
  - 소켓(socket)

---

### 시그널(signal)

- 유닉스에서 30년 이상 사용된 전통적인 기법
- 커널 또는 프로세스에서 다른 프로세스에 어떤 이벤트가 발생되었는지를 알려주는 기법
- 프로세스 관련 코드에 관련 시그널 핸들러를 등록해서 해당 시그널 처리 실행
  i. 시그널 무시
  ii. 시그널 블록 (블록을 푸는 순간, 프로세스에 해당 시그널 전달)
  iii. 등록된 시그널 핸들러로 특정 동작 수행
  iv. 등록된 시그널 핸들러가 없다면 커널에서 기본 동작 수행

---

### 주요 시그널

> 주요 시그널: 기본 동작

- SIGKILL: 프로세스를 죽여라(슈퍼관리자가 사용하는 시그널로 프로세스는 어떤 경우든 죽도록 되어있음)
- SIGALARM: 알람을 발생한다
- SIGSTP: 프로세스를 멈춰라 (Ctrl + z)
- SIGCOUNT: 멈춰진 프로세스를 실행해라
- SIGINT: 프로세스에 인터럽트를 보내서 프로세스를 죽여라(Ctrl + c)
- SIGSEGV: 프로세스가 다른 메모리 영역을 침범했다.
  > 시그널 종류: kill -l
