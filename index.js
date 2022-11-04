const TelegramBot = require("node-telegram-bot-api");
const config = require("./config");
const token = config.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, function onPhotoText(msg) {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Hii!! My self jenish 🧑‍🎓\n" +
      "How can i help you?\n\n" +
      " Hiii  " +
      msg.from.first_name +
      "!!!!\n" +
      "✌️first select your depeartment✌️\n" +
      "💻for computer engineering use command  /" +
      "CE🧑‍💻\n" +
      "💻for computer science and engineering use command  /" +
      "CSE🧑‍💻\n" +
      "💻for information  technology  use command  /" +
      "IT🧑‍💻\n"
  );
});
bot.onText(/\/love/, function onPhotoText(msg) {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "  love you   " + msg.from.first_name);
});
bot.onText(/\/CE/, function onPhotoText(msg) {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "  For CE student   \n" +
      "✌️first select your subject✌️\n" +
      "💻for Operating-system use command  /" +
      "OS🧑‍💻\n" +
      "💻for Design & Analysis of algorithms use command  /" +
      "DAA🧑‍💻\n"
  );

  bot.onText(/\/OS/, function onPhotoText(msg) {
    bot.sendMessage(
      chatId,
      "  For OS   \n" +
        "✌️first select your materials✌️\n" +
        "💻for PPT use command  /" +
        "PPT🧑‍💻\n" +
        "💻for FILES use command  /" +
        "FILE🧑‍💻\n"
      //   "💻for QUE-BANK use command  /" +
      //   "FILE🧑‍💻\n"
    );
    bot.onText(/\/PPT/, function onPhotoText(msg) {
      bot.sendMessage(
        chatId,
        "  For OS PPT all chapter   \n" +
          "✌️first select your chapter\n" +
          "💻Dowanload/" +
          "inter-process-communication 🧑‍💻\n" +
          "💻Dowanload/" +
          "UNIX File Systems 🧑‍💻\n" +
          "💻Dowanload/" +
          "basic operating 🧑‍💻\n" +
          "💻Dowanload/" +
          "process managment and scheduling 🧑‍💻\n" +
          "💻Dowanload/" +
          "Deadlock 🧑‍💻\n" +
          "💻Dowanload/" +
          " memory managment 🧑‍💻\n" +
          "💻Dowanload/" +
          "io managment 🧑‍💻\n" +
          "💻Dowanload/" +
          "File Systems in Operating System 🧑‍💻\n" +
          "💻Dowanload/" +
          "System Protection 🧑‍💻 \n"
      );

      bot.onText(/\/inter-process-communication/, function onPhotoText(msg) {
        bot.sendDocument(
          chatId,
          "src/CE/OS/PPT/ch-3-inter-process-communication.pptx"
        );
      });
      bot.onText(/\/UNIX File Systems/, function onPhotoText(msg) {
        bot.sendDocument(chatId, "src/CE/OS/PPT/ch-9 UNIX File Systems 2.pdf");
      });
      bot.onText(/\/basic operating/, function onPhotoText(msg) {
        bot.sendDocument(
          chatId,
          "src/CE/OS/PPT/Chapter - 1 basic operating.pptx"
        );
      });
      bot.onText(
        /\/process managment and scheduling/,
        function onPhotoText(msg) {
          bot.sendDocument(
            chatId,
            "src/CE/OS/PPT/Chapter - 2 process managment and scheduling.pptx"
          );
        }
      );
      bot.onText(/\/Deadlock/, function onPhotoText(msg) {
        bot.sendDocument(chatId, "src/CE/OS/PPT/Chapter - 4 deadlock.pptx");
      });
      bot.onText(/\/memory managment/, function onPhotoText(msg) {
        bot.sendDocument(
          chatId,
          "src/CE/OS/PPT/Chapter - 5_1 memory managment.ppt"
        );
        bot.sendDocument(
          chatId,
          "src/CE/OS/PPT/Chapter - 5_2 memory managment.ppt"
        );
      });
      bot.onText(/\/io managment/, function onPhotoText(msg) {
        bot.sendDocument(chatId, "src/CE/OS/PPT/Chapter - 6 io managment.ppt");
      });
      bot.onText(
        /\/File Systems in Operating System/,
        function onPhotoText(msg) {
          bot.sendDocument(
            chatId,
            "src/CE/OS/PPT/chaptetr-7 File Systems in Operating System.pptx"
          );
        }
      );
      bot.onText(/\/System Protection/, function onPhotoText(msg) {
        bot.sendDocument(chatId, "src/CE/OS/PPT/Chp 8 System Protection.pptx");
      });
    });
    bot.onText(/\/FILE/, function sendDocument(msg) {
      bot.sendMessage(chatId, "There is OS FILES");
    });
  });
  bot.onText(/\/DAA/, function onPhotoText(msg) {
    bot.sendMessage(
      chatId,
      "  For DAA   \n" +
        "✌️first select your materials✌️\n" +
        "💻for PPT use command  /" +
        "PPT🧑‍💻\n" +
        "💻for FILES use command  /" +
        "FILE🧑‍💻\n"
      //   "💻for QUE-BANK use command  /" +
      //   "FILE🧑‍💻\n"
    );
    bot.onText(/\/PPT/, function onPhotoText(msg) {
      bot.sendMessage(chatId, "There is DAA ppt");
    });
    bot.onText(/\/FILE/, function onPhotoText(msg) {
      bot.sendMessage(chatId, "There is DAA FILES");
    });
  });
});
bot.onText(/\/photo/, function onPhotoText(msg) {
  // From file path
  const photo = `https://static.remove.bg/remove-bg-web/ea3c274e1b7f6fbbfe93fad8b2b13d7ef352f09c/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg`;
  bot.sendPhoto(msg.chat.id, photo, {
    caption: "I'm a bot!",
  });
});

//   bot.sendMessage(
//     chatId,
//     "  For CE student   \n" +
//       "✌️first select your sem✌️\n" +
//       "💻for PPT use command  /" +
//       "PPT🧑‍💻\n" +
//       "💻for file  /" +
//       "FILE🧑‍💻\n" +
//       "💻for Questions bank  /" +
//       "QUE-BANK🧑‍💻\n"
//   );
