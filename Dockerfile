FROM centos

#install sudo, wget and unzip
RUN yum install sudo -y && \
    yum install wget -y && \
    yum install unzip -y

#install nodejs
RUN curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
RUN yum install -y nodejs

#install chrome
RUN yum install https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm -y

#download and unzip chromedriver
RUN wget https://chromedriver.storage.googleapis.com/92.0.4515.43/chromedriver_linux64.zip && \
    unzip chromedriver_linux64.zip

#install JAVA
RUN yum install java-11-openjdk-devel -y

#install dependencies
RUN yum install gcc-c++ -y && \
    yum groupinstall 'Development Tools' -y && \
    npm i fibers -y && \
    npm i @wdio/selenium-standalone-service -y


WORKDIR /root

COPY . /root

#install firefox
RUN wget -O- "https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=en-US" | tar -jx -C /root/
RUN ln -s /root/firefox/firefox /usr/bin/firefox