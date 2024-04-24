
import axios from "axios";
import { useRef, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { RiSendPlane2Fill } from "react-icons/ri";

export default function MessageForm () {
  const name = useRef<string>(""),
    email = useRef<string>(""),
    message = useRef<string>(""),
    [sending, setSending] = useState(false),
    [errMsg, setErrMsg] = useState(""), // error message
    emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    sendMessage = async () => {
      if (email.current == "" || message.current == "") return setErrMsg("Please fill out all fields!");
      if (!emailRegex.test(email.current)) return setErrMsg("Hmm, that doesn't look like an email.");

      setSending(true);

      // post data to api/send.ts
      const response = await axios.post("/api/send", {
        name: name.current,
        email: email.current,
        message: message.current,
      });

      if (response.data.result === "FIELD_EMPTY") return setErrMsg("Please fill out all fields!");
      if (response.data.result === "DISCORD_API_ERROR") return setErrMsg("Something went wrong...");

      setSending(false);

      return setErrMsg("Thanks for reaching out!");
    };

  return (
    <div className="md:col-span-2 row-span-3 bg-opacity-50 bg-white dark:bg-slate-800/5 rounded-md p-4 border border-zinc-800/50">
      <p className="text-center p-2">
						Have an inquiry? Feel free to leave a message below.
					</p>
      <h1 className="font-bold text-sm dark:text-slate-500 mb-1">Name / Discord</h1>
      <input
        placeholder="John Doe / JoKeRxTD"
        type="text"
        onChange={(e: any) => (name.current = e.target.value)}
        className="w-full p-2 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
      />

      <h1 className="font-bold text-sm dark:text-slate-500 mb-1">Email</h1>
      <input
        placeholder="example@email.com"
        type="text"
        onChange={(e: any) => (email.current = e.target.value)}
        className="w-full p-2 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
      />

      <h1 className="font-bold text-sm dark:text-slate-500 mb-1">Message</h1>
      <textarea
        placeholder="Hi Tom/JoKeR, what's up?"
        onChange={(e: any) => (message.current = e.target.value)}
        className="w-full p-2 h-36 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
      />

      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-gray-900 dark:text-gray-300 text-sm">{errMsg}</p>

        <button
          onClick={sendMessage}
          className="border border-gray-800 hover:bg-gray-200 dark:border-zinc-600/80 dark:bg-zinc-600/70 dark:hover:bg-zinc-500/70 flex flex-row items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-75"
        >
          <span className="mt-[2px]">Send</span>
          {!sending && <RiSendPlane2Fill className="ml-2" />}
          {sending && <ImSpinner2 className="w-4 h-4 ml-2 animate-spin" />}
        </button>
      </div>
    </div>
  );
};