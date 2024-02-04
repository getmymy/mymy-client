import axios from 'axios';

enum GrantType {
  AUTHORIZATION_CODE = 'AUTHORIZATION_CODE',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
}

type AuthRequest = {
  grant_type: GrantType;
  service_type?: 'GOOGLE';
  auth_code?: string;
};

type AuthResponse = {
  accessToken: string;
};

export async function getToken(param: { auth_code?: string | null }) {
  try {
    console.log('code accepted', param.auth_code);
    const req_body: AuthRequest = { grant_type: GrantType.REFRESH_TOKEN };

    if (Object.hasOwn(param, 'auth_code')) {
      const { auth_code } = param;
      if (!auth_code) throw new Error('No code provided');

      req_body.grant_type = GrantType.AUTHORIZATION_CODE;
      req_body.service_type = 'GOOGLE';
      req_body.auth_code = auth_code;
    }
    const res = await axios.post('/public/v1/token', req_body);
    return res.data as AuthResponse;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting auth');
  }
}
