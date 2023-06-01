// const mongoose = require('mongoose');
//   const uri="mongodb://localhost:27017";


  const mongoose = require('mongoose');

  const mongoURI = "Connection URI";
  
  const connectToMongo = async () => {
   mongoose.connect(mongoURI, await console.log("Connected to mongo Successful")
      );
  }


/* 
 mongoose.connect(uri,{ useNewUrlParser: true },function(err){



    if (err) {
        console.log('Veritabanı bağlantısı başarısız oldu.');
      } else {
        console.log('Veritabanı bağlantısı başarılı.');
      }
   });
*/

  