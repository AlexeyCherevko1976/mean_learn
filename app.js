const express=require ('express');
const mongoose=require('mongoose');
const config=require('config');
// mongodb+srv://cherevkoalexey1976:<password>@cluster0.zxuz2.mongodb.net/<dbname>?retryWrites=true&w=majority
const app=express();

app.use('/api/auth', require('./routes/auth.routes'))
const PORT=config.get('port') || 5000;

async function start(){
	try{//console.log(config.get('mongoUri'), PORT)
		await mongoose.connect(config.get('mongoUri'), 
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true
			})
		app.listen(PORT, ()=>console.log(`App has been started on port ${PORT}`))
		
	}catch(e){
		console.log('Server Error', e.message);
		//process.exit(code:1);
	}
}

start();
