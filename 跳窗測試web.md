url: [https://stackoverflow.com/questions/53844052/how-to-make-an-alertdialog-in-flutter](https://stackoverflow.com/questions/53844052/how-to-make-an-alertdialog-in-flutter)

showAlertDialog(BuildContext context) {



&nbsp; // set up the button

&nbsp; Widget okButton = TextButton(

&nbsp;   child: Text("OK"),

&nbsp;   onPressed: () { },

&nbsp; );



&nbsp; // set up the AlertDialog

&nbsp; AlertDialog alert = AlertDialog(

&nbsp;   title: Text("My title"),

&nbsp;   content: Text("This is my message."),

&nbsp;   actions: \[

&nbsp;     okButton,

&nbsp;   ],

&nbsp; );



&nbsp; // show the dialog

&nbsp; showDialog(

&nbsp;   context: context,

&nbsp;   builder: (BuildContext context) {

&nbsp;     return alert;

&nbsp;   },

&nbsp; );

}

跳窗測試web效果

直接寫上有什麼

