### 쉘 사용법 정리 - foreground 및 background 프로세스, 프로세스 관리 및 제어

---

### 프로세스 vs 바이너리

- 코드 이미지 또는 바이너리: 실행파일)
- 실행 중인 프로그램: 프로세스
  - 가상 메모리 및 물리 메모리 정보(PCB)
  - 시스템 리소스 관련 정보
  - 스케쥴링 단위

---

### 리눅스는 다양한 프로세스 실행환경

- 리눅스는 기본적으로 다양한 프로세스가 실행됨
  - 유닉스 철학: 여러 프로그램이 서로 유기적으로 각자의 일을 수행하면서 전체 시스템이 동작하도록 하는 모델

---

### foreground process / background process

- foreground process: shell에서 해당 프로세스 실행을 명령한 후, 해당 프로세스 수행 종료까지 사용자가 다른 입력을 하지 못 하는 프로세스
- background process: 사용자 입력과 상관없이 실행되는 프로세스

  - shell에서 해당 프로세스 실행시, 맨 뒤에 &를 붙혀줌
  - 사용예
    <center><image src='./images/backgroundprocess.png' width=700 ></center>

    > [1]은 작업번호(job number), 57은 pid(process ID)를 나타냄

---

### foreground process 제어하기

- Ctrl + z: foreground process를 실행 중지 상태(suspend 모드)로 변경
- 맨 마지막 Ctrl + z로 중지된 프로세스는 bg명령으로 background 프로세스로 실행할 수 있음
- jobs 명령어: 백그라운드로 진행 또는 중지된 상태로 있는 프로세스를 보여줌
<center><image src='./images/foregroundprocess.png' width=700 ></center>

- Ctrl + c: 프로세스 작업 취소(해당 프로세스는 완전히 종료된다)
  > 운영체제 소프트웨어 인터럽트가 해당 프로세스에 보내짐 - 그래서 프로세스 제어가 가능함

---

### 프로세스 상태 확인 -ps 명령어

- 사용법: ps [option(s)]
- option(s)
  <center><image src='./images/processstatusCommand.png' width=700 ></center>

- 데몬 프로세스(damon process): daemon은 악마를 의미함. 사용자 모르게 시스템 관리를 위해 실행되는 프로세스로 보통 시스템이 부팅될 때 자동 실행(예: ftpd, inetd 등)

---

### 프로세스 상태 확인 - ps 명령어

- 주요 ps 출력 정보 항목
  <center><image src='./images/psCommandResult.png' width=700 ></center>

---

### 프로세스 중지시키기

- kill 명령어
  - 사용법
    1. kill %jobnumber
    2. kill pid
    - 작업 강제 종료 옵션 -9
    - 예
      <center><image src='./images/commandKill.png' width=300 ></center>

---

### 주로 사용하는 프로세스 명령(적어도 이 명령은 편하게 사용 해야 함)

- **pas aux | grep 프로세스명** : 프로세스가 실행중인지를 확인하고 관련 프로세스에 대한 정보 출력
- **kill -9 프로세스ID** : 해당 프로세스를 강제로 죽임
- **명령 &** : 터미널에서 다른 작업을 해야하거나 프로세스 실행에 오랜 시간이 걸릴 경우 background로 실행
- **Ctrl + z** : 프로세스 중지
- **Ctrl + c** : 프로세스 종료(실행취소)
