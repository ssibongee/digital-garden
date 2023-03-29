---
date: 2023-03-29
updated: 2023-03-29
tags:
    - Integration Test
---

# Presentation Layer Test



# Presentation Layer를 Integration Test로 사용하는 경우
- Application Layer를 Mocking 하지 않는다.
- 실제 API를 통해 UseCase를 실행시킨다.
- Test Container 등을 통해 독립적으로 테스트할 수 있또록 구성한다. (RDB, Redis 등)
- 외부 API는 Conditional하게 Mocking 할 수 있도록 구성한다. (기본적으로는 단독으로 테스트할 수 있고, 옵셔널하게 외부 API까지 포함해 테스트도 실행할 수 있도록 한다)


## Presentation Layer가 독립적으로 Test 되는 경우
- Presentation Layer를 제외하고 Mocking 한다.
- 이런 테스트는 RestDocs를 사용하지 않는 경우에는 보통 작성하지 않는다. (실제로 검증할 수 있는 부분이 거의 없기 때문에)
- 스펙을 변경할 때의 적신호를 보내줄 수 있지만, 이 신호로 변경할 수 있는지 아닌지에 대한 실질적인 신호로 사용하긴 어렵다. (결국은 클라이언트와 서버 간의 규약이기 때문에)
- API에 대한 테스트는 하지 않지만 Interceptor, Resolver, Filter, Jackson 구성 등에 대한 논리 테스트는 별도로 작성한다.
  - Filter가 잘 동작하는지 테스트가 아닌, Filter의 내부 동작이 어떤일을 해야하는지에 대한 테스트를 작성한다.
  - Filter를 직접 사용해서 테스트하기도 하고, Filter가 DI로 로직을 분리해서 구현되고 있다면 Filter가 사용하는 의존성만 테스트한다.