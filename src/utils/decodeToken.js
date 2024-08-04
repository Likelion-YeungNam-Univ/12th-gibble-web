import base64 from 'base-64';

const decodeToken = (jwtToken) => {
    let payload = jwtToken.substring(jwtToken.indexOf('.')+1, jwtToken.lastIndexOf('.'));
    let decodingInfo = base64.decode(payload);
    let decodingInfoJson = JSON.parse(decodingInfo);

    return decodingInfoJson;
}

export default decodeToken;