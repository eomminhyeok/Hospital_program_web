// services/api.js
const login = async (userId, password) => {
    try {
      // 서버로 로그인 요청을 보냅니다.
      const response = await fetch('http://example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password }),
      });
      // 서버 응답을 처리합니다.
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to log in');
      }
    } catch (error) {
      throw new Error('Failed to log in');
    }
  };
  
  export { login };
  