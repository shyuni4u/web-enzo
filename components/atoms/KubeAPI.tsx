import axios from 'axios';
import auth from '../../lib/setting.json';

const token = auth.token;

// APISERVER=$(kubectl config view | grep server | cut -f 2- -d ":" | tr -d " ")
// TOKEN=$(kubectl describe secret $(kubectl get secrets | grep default | cut -f1 -d ' ') | grep -E '^token' | cut -f2 -d':' | tr -d '\t')
// curl https://10.96.8.208:6443/api --header "Authorization: Bearer $TOKEN" --insecure
// curl https://10.96.8.208:6443/api --header "Authorization: Bearer $TOKEN" --insecure
// curl http://10.96.8.208:9999/api --header "Authorization: Bearer $TOKEN"
// curl http://localhost:8080/api --header "Authorization: Bearer $TOKEN"
// curl http://localhost:9999/api --header "Authorization: Bearer $TOKEN"
// sudo nano /etc/kubernetes/manifests/kube-apiserver.yaml

export default axios.create({
  // baseURL: 'http://localhost:9999',
  // baseURL: 'https://searchconsole.googleapis.com/$discovery/rest?version=v1'
  baseURL: auth['kubernetes-ip'],
  headers: {
    authorization: `Bearer ${token}`
  }
});
