FROM tmvdl/android:cordova

WORKDIR /app

RUN cordova create stroll com.brtmvdl.stroll stroll

WORKDIR /app/stroll

COPY www/html www

RUN cordova platform add android

RUN cordova build android
