<h1 align="center">🐰 DashBunny 🚀</h1>
<p align="center">숏츠 기반의 직관적 탐색과 몰입감 있는 경험을 제공하는 혁신적인 배달 플랫폼</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/8e27abbe-7c9e-4553-bbb8-5aefe27c17f1" alt="DashBunny" style="width: 100%;">
</p>

---

### **<h3 align="center">📖 프로젝트 소개</h3>**  
<p align="center">DashBunny는 기존 배달 플랫폼에 숏츠(Shorts) 기능을 결합하여, 사용자들이 짧은 영상을 통해 메뉴를 직관적으로 탐색하고, <br/>
  바로 주문까지 가능하도록 한 혁신적인 배달 서비스입니다.</p>  

<br/>
<h3 align="center">🎥 <b>숏츠 기반 기능</b></h3>  
<p align="center">
- 음식 조리 과정, 플레이팅, 실시간 리뷰를 짧은 영상으로 제공.<br>
- 사용자에게는 시각적 경험을, 음식점에는 브랜드 강화 효과.<br>
</p>  

<br/>
<h3 align="center">✨ <b>핵심 목표</b></h3>  
<p align="center">
- 기존 텍스트 및 이미지 중심 탐색 방식을 대체.<br>
- 개인화된 추천과 간편한 UI/UX로 라이프스타일 플랫폼으로 확장.<br>
</p>

---

### **<p align="center">📋 주요 도메인 및 기능</p>**

#### **<p align="center">1️⃣ 소비자 (Customer)</p>**  
<p align="center">DashBunny의 핵심 사용자로, 숏츠 기반의 메뉴 탐색 및 주문 경험을 제공합니다.</p>  

<p align="center"><b>주요 기능 및 특징</b></p>  
<p align="center">
  <img width="480" src="https://github.com/user-attachments/assets/e1142891-ba97-4f4a-942b-e05d90761e5e" alt="소비자 기능1"><br>
  <img width="480" src="https://github.com/user-attachments/assets/598b162f-f7cc-4001-98f2-5bea805d4925" alt="소비자 기능2"><br>
  <img width="480" src="https://github.com/user-attachments/assets/ccbb7807-a360-4e0d-845d-68052f481f07" alt="소비자 기능3"><br>
  <img width="652" src="https://github.com/user-attachments/assets/8e3f5915-6d21-42cb-a5c7-f6cab43815e5" alt="소비자 기능4"><br>
</p>  

<p align="center">🖼️ <b>소비자 도메인 시연영상</b></p>  

https://github.com/user-attachments/assets/7e23c58a-a2c6-457e-84a0-d9790fdae849



---

#### **<p align="center">2️⃣ 사장 (Owner)</p>**  
<p align="center">음식점을 운영하며 DashBunny 플랫폼에서 숏츠를 활용해 브랜드를 홍보하고 매출을 관리합니다.</p>  

<p align="center"><b>주요 기능 및 특징</b></p>  
<p align="center">
  <img width="1435" src="https://github.com/user-attachments/assets/ab3fe416-2fe2-4b64-a7a0-7a1082d3c1b8" alt="사장 기능">
</p>  

<p align="center">🖼️ <b>사장님 도메인 시연영상</b></p>  

https://github.com/user-attachments/assets/c74ed85d-9cbb-403a-b9a2-d02fc80321d9


---

#### **<p align="center">3️⃣ 관리자 (Admin)</p>**  
<p align="center">DashBunny 플랫폼의 안정적인 운영을 지원하며, 사용자 및 시스템을 관리합니다.</p>  

<p align="center"><b>주요 기능 및 특징</b></p>  
<p align="center">
  <img width="1438" src="https://github.com/user-attachments/assets/cb664f31-adcf-438b-9da5-65b7e09791dc" alt="관리자 기능">
</p>  

<p align="center">🖼️ <b>관리자 도메인 시연영상</b></p>  

https://github.com/user-attachments/assets/1e136a51-56ed-4634-b1dc-7e882b8c29b9

---




<h3 align="center">📋 아키텍처</h3>

![image](https://github.com/user-attachments/assets/a35e6f62-5e4e-4b8b-a647-9297a25310a1)

---


<h2 align="center">📌 상세 기능 및 특징</h2>



<div align="center">
  
### **사용자 도메인**


| 기능                          | 설명                                                                                                                                                     |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| 사용자 도메인                       | - 회원가입<br> - 로그인 <br> - 마이페이지 <br> - 가게 리스트 조회 <br> - 찜 등록 / 조회<br>- 장바구니<br>- 결제<br> 
| 쇼츠 도메인                       |- 사장님의 쇼츠 등록<br> - 유저의 주소 3km 반경 내 위치한 가게의 쇼츠 가져오기 

### **배달 도메인**                       
| **기능**                          | **설명**                                                                                              |
|------------------------------------|------------------------------------------------------------------------------------------------------|
| **배달 도메인**                     |- 가게의 배달 요청 <br>- 배달원의 배달 요청 수락<br>- 배달원의 배달 완료<br>- 배달원의 오늘 및 선택한 날짜별  배달 내역<br>                     |           

### **사장님 / 주문 도메인**

| **기능**                          | **설명**                                                                                              |
|------------------------------------|------------------------------------------------------------------------------------------------------|
| **사장님 도메인**                     | - 가게 등록, 정보 조회 및 수정<br>- 메뉴 및 그룹 추가, 수정, 삭제<br>- 쿠폰 발행 및 삭제                     |                    |
| **주문 도메인**                     | - 주문 요청 생성 및 상세 정보 조회<br>- 사장님이 주문을 접수 및 처리하는 상태 업데이트 기능<br>- 실시간 주문 현황 조회하기 <br>- 주문 완료 후 사용자와 가게 간의 알림 연동  |

### 관리자/ 쿠폰 도메인
| 기능                          | 설명                                                                                              |
|------------------------------------|------------------------------------------------------------------------------------------------------|
| 관리자 도메인                     | - 가게 등록 승인/거절/재승인 및 가게 폐업 승인<br>- 가게 상태별 목록 조회 및 상세 조회<br>- 공지사항 등록/수정/삭제 및 권한별 조회                    |                    |
| 쿠폰 도메인                     | - 관리자 일반 쿠폰 생성/조회 및 쿠폰 상태 변경 <br>- 관리자 선착순 쿠폰 생성/조회 및 쿠폰 상태 변경  <br>- 사용자 일반, 선착순, 가게 쿠폰 다운로드 <br>- 사용자 일반 쿠폰 조회, 가게 쿠폰 조회, 선착순 쿠폰 조회 <br>- 사용자 쿠폰함 조회 <br>- 사용자 장바구니 쿠폰 조회 및 사용 |


</div>


---

<h3 align="center">📚 기술 스택</h3>

<table align="center">
  <tr>
    <th align="center">Frontend</th>
    <th align="center">Backend</th>
  </tr>
  <tr>
    <td>
      <ul>
        <li><img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white" alt="React" /> <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js" /></li>
        <li><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" /></li>
        <li><img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="TailwindCSS" /></li>
        <li><img src="https://img.shields.io/badge/Zustand-3A86FF?style=flat&logoColor=white" alt="Zustand" /> <img src="https://img.shields.io/badge/React%20Query-FF4154?style=flat&logo=react-query&logoColor=white" alt="React Query" /></li>
        <li><img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" /></li>
        <li><img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" /></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white" alt="Spring Boot" /></li>
        <li><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="MySQL" /> <img src="https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white" alt="Redis" /></li>
        <li><img src="https://img.shields.io/badge/Apache%20Kafka-231F20?style=flat&logo=apache-kafka&logoColor=white" alt="Apache Kafka" /> <img src="https://img.shields.io/badge/Spring%20SSE-6DB33F?style=flat&logo=java&logoColor=white" alt="Spring SSE" /></li>
        <li><img src="https://img.shields.io/badge/Protocol%20Buffers-336691?style=flat&logo=protobuf&logoColor=white" alt="Protocol Buffers" /></li>
        <li><img src="https://img.shields.io/badge/Kakao%20Login-FFCD00?style=flat&logo=kakao&logoColor=white" alt="Kakao Login" /> <img src="https://img.shields.io/badge/Kakao%20Map-FFCD00?style=flat&logo=kakao&logoColor=white" alt="Kakao Map" /> <img src="https://img.shields.io/badge/Toss%20Payments-0054FF?style=flat&logo=tosspayments&logoColor=white" alt="Toss Payments" /> <img src="https://img.shields.io/badge/CoolSMS-008ED2?style=flat&logo=twilio&logoColor=white" alt="CoolSMS" /></li>
        <li><img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=flat&logo=amazon-s3&logoColor=white" alt="Amazon S3" /></li>
        <li><img src="https://img.shields.io/badge/Apache%20JMeter-D22128?style=flat&logo=apache-jmeter&logoColor=white" alt="Apache JMeter" /> <img src="https://img.shields.io/badge/Wireshark-1679A7?style=flat&logo=wireshark&logoColor=white" alt="Wireshark" /></li>
      </ul>
    </td>
  </tr>
</table>

---


<h3 align="center">📚 설계도</h3>

**ERD**
           
![image](https://github.com/user-attachments/assets/bcf22f74-51b7-4c79-845f-0da499da39d2)


  [요구사항 정의서](https://docs.google.com/spreadsheets/d/1SIp4nXwJ0ElFOywPJW0efp9M_8tOnuo6Mcc7AePjCrI/edit?gid=657969246#gid=657969246)
  <br/>
  [REST API 명세서](https://team1-4.gitbook.io/team1)

---
