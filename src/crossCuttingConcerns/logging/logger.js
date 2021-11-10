export class BaseLogger {
  log(data) {
    console.log('Default Logger: ' + data);
  }
}

export class ElasticLogger extends BaseLogger {
  log(data) {
    console.log('Logged to Elastic. ' + data);
  }
}

export class MongoLogger extends BaseLogger {
  log(data) {
    console.log('Logged to Mongo. ' + data);
  }
}

/* Cok yanlis bir yontem, dpendency injection kullaniyoruz ustteki gibi
export class Logger {
  log(data, logType) {
    if (logType === 'Firebase') {

    } else if () {}
    console.log(data);
  }
}*/

