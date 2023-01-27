FROM tmvdl/android:ionic

WORKDIR /app

RUN cordova create stroll com.brtmvdl stroll

WORKDIR /app/stroll

COPY www/html www

RUN cordova platform add android@11

RUN cordova build android
