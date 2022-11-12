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

  bot.onText(/OS/, function onPhotoText(msg) {
    bot.sendMessage(
      chatId,
      "  For OS   \n" +
        "✌️first select your materials✌️\n" +
        "💻for PPT use command  /" +
        "OS_PPT🧑‍💻\n" +
        "💻for FILES use command  /" +
        "OS_FILE🧑‍💻\n"
      //   "💻for QUE-BANK use command  /" +
      //   "FILE🧑‍💻\n"
    );
    bot.onText(/OS_PPT/, function onPhotoText(msg) {
      bot.sendMessage(
        chatId,
        "  For OS PPT all chapter   \n" +
          "✌️first select your chapter\n" +
          "💻Dowanload" +
          "/inter_process_communication 🧑‍💻\n" +
          "/UNIX_File_Systems 🧑‍💻\n" +
          "/basic_operating 🧑‍💻\n" +
          "/process_managment_and_scheduling 🧑‍💻\n" +
          "/Deadlock 🧑‍💻\n" +
          "/memory_managment 🧑‍💻\n" +
          "/io_managment 🧑‍💻\n" +
          "/File_Systems_in_Operating_System 🧑‍💻\n" +
          "/System_Protection 🧑‍💻 \n"
      );

      bot.onText(/\/inter_process_communication/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");
        bot.sendDocument(
          chatId,
          "src/CE/OS/PPT/ch-3-inter-process-communication.pptx"
        );
      });
      bot.onText(/\/UNIX_File_Systems/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

        bot.sendDocument(chatId, "src/CE/OS/PPT/ch-9 UNIX File Systems 2.pdf");
      });
      bot.onText(/\/basic_operating/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

        bot.sendDocument(
          chatId,
          "src/CE/OS/PPT/Chapter - 1 basic operating.pptx"
        );
      });
      bot.onText(
        /\/process_managment_and_scheduling/,
        function onPhotoText(msg) {
          bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

          bot.sendDocument(
            chatId,
            "src/CE/OS/PPT/Chapter - 2 process managment and scheduling.pptx"
          );
        }
      );
      bot.onText(/\/Deadlock/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

        bot.sendDocument(chatId, "src/CE/OS/PPT/Chapter - 4 deadlock.pptx");
      });
      bot.onText(/\/memory_managment/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

        bot.sendDocument(
          chatId,
          "src/CE/OS/PPT/Chapter - 5_1 memory managment.ppt"
        );
        bot.sendDocument(
          chatId,
          "src/CE/OS/PPT/Chapter - 5_2 memory managment.ppt"
        );
      });
      bot.onText(/\/io_managment/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

        bot.sendDocument(chatId, "src/CE/OS/PPT/Chapter - 6 io managment.ppt");
      });
      bot.onText(
        /\/File_Systems_in_Operating_System/,
        function onPhotoText(msg) {
          bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

          bot.sendDocument(
            chatId,
            "src/CE/OS/PPT/chaptetr-7 File Systems in Operating System.pptx"
          );
        }
      );
      bot.onText(/\/System_Protection/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

        bot.sendDocument(chatId, "src/CE/OS/PPT/Chp 8 System Protection.pptx");
      });
    });
    bot.onText(/\/OS_FILE/, function sendDocument(msg) {
      bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

      bot.sendMessage(chatId, "There is OS FILES");
    });
  });
  bot.onText(/\/DAA/, function onPhotoText(msg) {
    bot.sendMessage(
      chatId,
      "  For DAA   \n" +
        "✌️first select your materials✌️\n" +
        "💻for PPT use command  /" +
        "DAA_PPT🧑‍💻\n" +
        "💻for FILES use command  /" +
        "DAA_FILE🧑‍💻\n"
    );

    bot.onText(/\/DAA_PPT/, function onPhotoText(msg) {
      bot.sendMessage(
        chatId,
        "  For DAA PPT all chapter   \n" +
          "✌️first select your chapter\n" +
          "💻Dowanload" +
          "/Analysis_of_Algorithms 🧑‍💻\n" +
          "/Backtracking_and_Branch_Bound 🧑‍💻\n" +
          "/Divide_Conquer 🧑‍💻\n" +
          "/Dynamic_Programming 🧑‍💻\n" +
          "/Exploring_Graph 🧑‍💻\n" +
          "/Greedy_Algorithms 🧑‍💻\n" +
          "/String_Matching_Introduction_to_NP_Completeness 🧑‍💻\n"
      );

      bot.onText(/\/Analysis_of_Algorithms/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");
        bot.sendDocument(chatId, "src/CE/DAA/PPT/Analysis of Algorithms.pdf");
      });
      bot.onText(/\/Backtracking_and_Branch_Bound/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

        bot.sendDocument(
          chatId,
          "src/CE/DAA/PPT/Backtracking and Branch & Bound.pdf"
        );
      });
      bot.onText(/\/Divide_Conquer/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

        bot.sendDocument(chatId, "src/CE/DAA/PPT/Divide_Conquer.pptx");
      });
      bot.onText(/\/Dynamic_Programming/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

        bot.sendDocument(chatId, "src/CE/DAA/PPT/Dynamic_Programming.pptx");
      });
      bot.onText(/\/Exploring_Graph/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

        bot.sendDocument(chatId, "src/CE/DAA/PPT/Exploring_Graph.pptx");
      });
      bot.onText(/\/Greedy_Algorithms/, function onPhotoText(msg) {
        bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

        bot.sendDocument(chatId, "src/CE/DAA/PPT/Greedy_Algorithms.pdf");
      });
      bot.onText(
        /\/String_Matching_Introduction_to_NP_Completeness/,
        function onPhotoText(msg) {
          bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

          bot.sendDocument(
            chatId,
            "src/CE/DAA/PPT/String Matching _ Introduction to NP-Completeness.pptx"
          );
        }
      );
    });
    bot.onText(/\/FILE/, function sendDocument(msg) {
      bot.sendMessage(chatId, "waiting some time....⌛⌛⌛");

      bot.sendMessage(chatId, "There is DAA FILES");
    });
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

