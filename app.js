require('dotenv').config();
const { Client, Attachment, MessageEmbed } = require('discord.js');
const bot = new Client();
const TOKEN = process.env.TOKEN;

bot.on('ready', () => {
  console.info(`Login efetuado: ${bot.user.tag}!`);
});

bot.on('message', msg => {

  if (msg.content === 'ednaldo pereira') {
    const attachment = new Attachment('https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/4/e/9/c4e987143a79ddc7769d979b49d86456.jpg')
    //msg.reply(`Euzinho`, attachment);
    msg.channel.send('Eu', attachment);
  } else if (msg.content === 'deputado') {
    msg.channel.send('federál')
  } else if (msg.content === 'ednaldo, quem é o homem mais lindo daqui?') {
    const attachment = new Attachment('https://i.imgur.com/3glUgXS.png');
    msg.channel.send('vou dar apenas uma dica: ', attachment);
  } else if (msg.content.includes('bruno') || msg.content.includes('Bruno')) {
    const attachment = new Attachment('https://contigo.uol.com.br/images/large/2019/08/14/marcos-oliveira-como-beicola-em-a-grande-familia-1170563.jpg');
    msg.channel.send('Ae beiçola, ta falando com você...', attachment);
  } else if (msg.content === 'obrigado ednaldo') {
    const attachment = new Attachment('https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/4/e/9/c4e987143a79ddc7769d979b49d86456.jpg');
    msg.channel.send('De nada', attachment);
  } else if (msg.content.includes('god') || msg.content.includes('deus')) {
    msg.channel.send('GOD IS GOOD');
  } else if (msg.content.includes('vale isso ednaldo?') 
    || msg.content.includes('vale isso Ednaldo?')
    || msg.content.includes('Vale isso ednaldo?')
    || msg.content.includes('Vale isso Ednaldo?')) {

      var res = ["TUDO", "NADA"];
      const randomRes = res[Math.floor(Math.random() * res.length)];
      msg.channel.send(`VALE ${randomRes}`);

  } else if (msg.content === 'olha que legal') {
    msg.reply('edenaldo pereira pra deputado federál pum pum puntz puntz')
  } else if (msg.content === 'what is the brother') {
    /*
    const embed = new MessageEmbed()
      .setTitle('Comandos Ednaldo Pereira')
      .setColor(0xfff0000)
      .setDescription('Lista de comandos do Ednaldo Pereirinha')
    //msg.channel.send('comandos Ednaldo')
    msg.channel.send(embed)
    */
    msg.channel.send('uma fraternidade, vamos procurar');
  }
});

bot.login(TOKEN);

