# Kubernetes Admin Page

Make kubernetes admin page

## Install

### Clone github repository

```console
git clone
```

### Install yarn packages

```console
yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:15000](http://localhost:15000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Develop your app as you normally do with Next.js.

### `yarn start`

Runs `next start` which starts a Next.js production server.

### `yarn sb`

**Storybook comes with two CLI utilities: `start-storybook` and `build-storybook`.**<br />
**Pass these commands the following options to alter Storybook's behavior.**<br />
Usage:<br />

```console
npx sb init
start-storyboook [options]
```

##### Learn More

You can learn more in the [start-storybook & build-storybook](https://storybook.js.org/docs/react/api/cli-options).

---

# kubeadm으로 단일 노드 Kubernetes 클러스터 만들기 **[참고](https://medium.com/@essem_dev/kubeadm%EC%9C%BC%EB%A1%9C-%EB%8B%A8%EC%9D%BC-%EB%85%B8%EB%93%9C-kubernetes-%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0-b3428ac6dbda)**

## SWAP 비활성화

1. swap 활성화 확인

> 출력이 비어있으면 스왑 공간이 비활성화되어있는 상태

```sh
sudo swapon --show
```

2. swap 파일이 있을 경우, swap 기능 비활성화.

> swap 파일이 있을 경우 *kubernetes*가 작동하지 않으며 따로 설정으로 해결해야함

```sh
sudo swapoff -a
```

3. /etc/fstab swap 관련 라인 제거 (재부팅시 계속 비활성화)

```sh
sudo nano /etc/fstab
```

## Install Docker CE

1. root login

> root 권한 없이 할 경우 *kubeadm*에서 에러가 발생함.

```sh
sudo -i
```

2. Install packages to allow apt to use a repository over HTTPS

```sh
apt-get update && apt-get install apt-transport-https ca-certificates curl software-properties-common
```

3. Add Docker’s official GPG key

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
```

4. Add Docker apt repository.

```sh
add-apt-repository \
 "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
 \$(lsb_release -cs) \
 stable"
```

5. Install Docker CE.

```sh
apt-get update && apt-get install docker-ce
```

6. Setup daemon.

```sh
cat > /etc/docker/daemon.json <<EOF
{
"exec-opts": ["native.cgroupdriver=systemd"],
"log-driver": "json-file",
"log-opts": {
  "max-size": "100m"
},
"storage-driver": "overlay2"
}
EOF
```

```sh
mkdir -p /etc/systemd/system/docker.service.d
```

7. Restart docker.

```sh
systemctl daemon-reload
systemctl restart docker
```

## Install kubeadm/kubelet/kubectl **[참고](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#installing-kubeadm-kubelet-and-kubectl)**

```sh
sudo apt-get update && sudo apt-get install -y apt-transport-https curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
cat <<EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list
deb https://apt.kubernetes.io/ kubernetes-xenial main
EOF
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```

## Kubernetes 클러스터 생성

1. Set network addon **[참고1](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/#pod-network)**, **[참고2](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/)**

```sh
kubeadm init --pod-network-cidr=10.244.0.0/16
```

> Output:

```sh
Your Kubernetes control-plane has initialized successfully!
To start using your cluster, you need to run the following as a regular user:
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config
You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/
Then you can join any number of worker nodes by running the following on each as root:
kubeadm join 10.0.2.15:6443 --token idofk0.80y0borfhelr8ch1 \
    --discovery-token-ca-cert-hash sha256:20eec08f0524de9827f3404a06c03160e8fb1d96fa5528f59ce7f6ed39ba3e43
```

##### 실패유형

<p>
1. swapoff가 아닌 경우
2. sudo 권한이 아닐 경우
</p>

2. Logout root & Login <user>

```sh
exit
```

3. Do guide line

```sh
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) \$HOME/.kube/config
```

4. Check PODS

```sh
kubectl get pods --all-namespaces
```

5. Add Flannel Network addon

```sh
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/2140ac876ef134e0ed5af15c65e414cf26827915/Documentation/kube-flannel.yml
```

6. Check PODS

```sh
kubectl get pods --all-namespaces
```

> Output:

```sh
NAMESPACE     NAME                           READY   STATUS    RESTARTS   AGE
kube-system   coredns-f9fd979d6-tvvs9        1/1     Running   0          7m
kube-system   coredns-f9fd979d6-xnfsr        1/1     Running   0          7m
kube-system   etcd-kube                      1/1     Running   0          7m9s
kube-system   kube-apiserver-kube            1/1     Running   0          7m9s
kube-system   kube-controller-manager-kube   1/1     Running   0          7m9s
kube-system   kube-flannel-ds-amd64-ddbfb    1/1     Running   0          64s
kube-system   kube-proxy-dh2pj               1/1     Running   0          7m
kube-system   kube-scheduler-kube            1/1     Running   0          7m8s
```

## 단일 노드 클러스터이기 때문에 이 노드에 일반 POD도 띄울 수 있게 다음 명령어를 입력한다.

1. taint [taint란?](https://kubernetes.io/ko/docs/concepts/scheduling-eviction/taint-and-toleration/)

```sh
kubectl taint nodes --all node-role.kubernetes.io/master-
```

## Install Ingress **[참고](https://kubernetes.github.io/ingress-nginx/deploy/)**

1. kubectl apply

```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.40.2/deploy/static/provider/baremetal/deploy.yaml
```

2. Deployment 확인

```sh
kubectl get deploy --all-namespaces
```

> Output:

```sh
NAMESPACE       NAME                       READY   UP-TO-DATE   AVAILABLE   AGE
ingress-nginx   ingress-nginx-controller   0/1     1            0           52s
kube-system     coredns                    2/2     2            2           34m
```

3. 내용 확인 후 Deployment 수정 **[참고](https://kubernetes.github.io/ingress-nginx/deploy/baremetal/#via-the-host-network)**

```sh
kubectl edit deploy/ingress-nginx-controller -n ingress-nginx
```

4. 수정사항 확인

```sh
kubectl -n ingress-nginx get pod -o wide
```

> Output:

```sh
NAME                                        READY   STATUS        RESTARTS   AGE     IP           NODE   NOMINATED NODE   READINESS GATES
ingress-nginx-admission-create-dp5c5        0/1     Completed     0          5h52m   10.244.0.4   kube   <none>           <none>
ingress-nginx-admission-patch-nrxxw         0/1     Completed     2          5h52m   10.244.0.5   kube   <none>           <none>
ingress-nginx-controller-785557f9c9-bxs6h   1/1     Terminating   0          5h52m   10.244.0.6   kube   <none>           <none>
ingress-nginx-controller-96588fb84-jcn9j    1/1     Running       0          14s     10.0.2.4     kube   <none>           <none>
```

## API 인증 **[참고](https://bryan.wiki/291)**

**클러스터 관리자 권한을 가지는 별도의 특별한 계정을 생성하고 사용**

> kube-system:root-sa 계정을 생성하고 cluster-admin이라는 ClusterRole(권한 집합)과 매핑(ClusterRoleBinding)하여 클러스터 관리자 권한을 부여한다.

###### root-sa-admin-access.yaml

```yaml
kind: ServiceAccount
apiVersion: v1
metadata:
  name: root-sa
  namespace: kube-system
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: root-sa-kube-system-cluster-admin
subjects:
  - kind: ServiceAccount
    name: root-sa
    namespace: kube-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
```

```sh
kubectl apply -f root-sa-admin-access.yaml
```

> Output

```sh
clusterrolebinding "root-sa-kube-system-cluster-admin" created
```

> API 확인용 쉘 스크립트 작성

###### check-apiserver-access-by-root.sh

```sh
#!/bin/bash
# By modified RBAC policy, this 'curl' results in '200 OK'
APISERVER=$(kubectl config view | grep server | cut -f 2- -d ":" | tr -d " ")

# Retrieve 'root' account's TOKEN in 'kube-system' namespace
ROOTTOKEN="$(kubectl get secret -nkube-system $(kubectl get secrets -nkube-system | grep root-sa | cut -f1 -d ' ') -o jsonpath='{$.data.token}' | base64 --decode)"
curl -D - --insecure --header "Authorization: Bearer $ROOTTOKEN" $APISERVER/api/v1/namespaces/default/services
```

```sh
sudo chmod +x check-apiserver-access-by-root.sh
```

## CORS 설정

```sh
sudo nano /etc/kubernetes/manifests/kube-apiserver.yaml
```

다음과 같이 수정

```yaml
spec:
  containers:
    - command:
        - kube-apiserver
        - ...
        - --cors-allowed-origins=.*
```

## Dashboard 설치 **[참고](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/#deploying-the-dashboard-ui)**

1. kubectl apply

```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
```

2. Create Sample User for Dashboard [참고](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)

3. Creating a Service Account

```sh
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
EOF
```

> Output:

```sh
serviceaccount/admin-user created
```

4. Creating a ClusterRoleBinding

```sh
cat <<EOF | kubectl apply -f -
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
EOF
```

> Output:

```sh
clusterrolebinding.rbac.authorization.k8s.io/admin-user created
```

5. Getting a Bearer Token

```sh
kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk '{print $1}')
```

> Output:

```sh
Name:         admin-user-token-jql6l
Namespace:    kubernetes-dashboard
Labels:       <none>
Annotations:  kubernetes.io/service-account.name: admin-user
              kubernetes.io/service-account.uid: b6618c53-3257-4fe6-ab81-12a4f98d6f76

Type:  kubernetes.io/service-account-token

Data
====
ca.crt:     1066 bytes
namespace:  20 bytes
token:      ey ... SECRET ... 2Q
```

6. Check Dashboard

```sh
kubectl proxy --port=8888
```

## Exploring the Kubernetes API

```sh
curl http://localhost:8888/api/
```

> Output:

```sh
{
  "kind": "APIVersions",
  "versions": [
    "v1"
  ],
  "serverAddressByClientCIDRs": [
    {
      "clientCIDR": "0.0.0.0/0",
      "serverAddress": "10.0.2.4:6443"
    }
  ]
}
```

## In Browser

> visual studio에서 복사 붙여넣기 할 경우 우측 하단에 브라우저에서 열기가 뜸. 그걸 선택하면 확실히 보임.

```sh
curl http://127.0.0.1:8888/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
```

# Admin page setting

## Install yarn

```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

## git repository

```sh
git clone https://github.com/shyuni4u/self-kubernetes.git
```

## Enable CORS

브라우저에서 막은 경우가 있으니 크롬의 경우 [링크](https://chrome.google.com/webstore/detail/cross-domain-cors/mjhpgnbimicffchbodmgfnemoghjakai)에서 크롬 확장 프로그램을 받아서 열어주세요.

***http://127.0.0.1:8888/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/***

## Nginx Docker 띄우기

```sh
sudo docker run -it --rm -d -p 9090:80 --name web nginx
sudo docker stop web
sudo docker run -it --rm -d -p 9090:80 --name web -v ~/self-kubernetes/out:/usr/share/nginx/html nginx
```

# Markdown 변환

```
https://www.daleseo.com/unified-remark-rehype/
```
