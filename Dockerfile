FROM ruby:2.3.1

COPY . /opt/
COPY deploy /opt/deploy
COPY source /usr/src/app/source

WORKDIR /opt

RUN apt-get update -y
RUN apt-get -y install \
zip supervisor vim ngrep telnet gettext net-tools curl

RUN apt-get update && apt-get install -y nodejs \
&& apt-get clean && rm -rf /var/lib/apt/lists/*


EXPOSE 4567

RUN bundle install

RUN bash -x -c "ln -s /opt/deploy/run /usr/local/bin/run && chmod +x /usr/local/bin/run"
CMD /usr/local/bin/run
