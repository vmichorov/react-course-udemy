import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = (props) => {
  const [translated, setTranslated] = useState("");
  const [debounced, setDebounced] = useState(props.text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounced(props.text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [props.text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounced,
            target: props.language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [props.language, debounced]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
