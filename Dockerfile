FROM alpine:edge
#based on xueshanf/awscli

ADD builds/app /app

RUN apk --no-cache add \ 
 bash \
curl \
less \
groff \
jq \
git \
python \
py-pip \
py2-pip && \
pip install --upgrade pip awscli s3cmd && \
mkdir /root/.aws

VOLUME /app