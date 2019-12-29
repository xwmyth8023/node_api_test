FROM ubuntu

ENV APPDIR /opt/app/current

WORKDIR $APPDIR

ENTRYPOINT ["docker-shell"]

CMD ["-t"]

ADD ./docker/docker-shell.sh /usr/bin/docker-shell
RUN chmod +x /usr/bin/docker-shell

ADD ./package.json $APPDIR/package.json
ADD ./.npmrc $APPDIR/.npmrc

RUN npm install

ADD . $APPDIR