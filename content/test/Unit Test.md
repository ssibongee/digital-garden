---
date: 2023-03-11
updated: 2023-03-11
tags:
    - Test
    - Google
---

## Google 엔지니어는 이렇게 일한다 중
- 구글이 말하는 단위 테스트는 단일 클래스나 메서드처럼 범위가 상대적으로 좁은 테스트를 의미한다.
  - 크기 : 테스트가 소비하는 자원과 수행할 수 있는 작업
  - 범위 : 테스트가 검증하고자 하는 코드의 양
  - 단위 테스트는 일반적으로 크기가 작지만 반드시 그러한 것은 아니다.
- 좁은 범위의 테스트는 독립된 클래스, 메서드 등의 코드 베이스 중 작은 일부 로직틀 테스트하는 것을 의미한다.
  - 중간 범위 테스트(통합 테스트)는 적은 수의 컴포넌트 사이의 상호작용을 검증하는 것을 의미한다.
  - 큰 범위의 테스트(E2E 및 시스템 테스트)는 시스템 사이의 상호 작용을 검증하는 것을 의미한다.
- `@WebMvcTest`를 사용한 테스트는 단위 테스트인가?
  - 개인적으로는 그렇게 생각하지 않음, 이미 스프링 MVC, WebFlux 등이 주는 기능을 이용해서 Jackson을 비롯한 여러가지 상호작용을 테스트하고 있기 때문