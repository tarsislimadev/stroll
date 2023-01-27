FROM tmvdl/android:ionic

WORKDIR /app

RUN cordova create stroll com.brtmvdl stroll

WORKDIR /app/stroll

COPY www/html www

RUN cordova platform add android

RUN cordova build android
