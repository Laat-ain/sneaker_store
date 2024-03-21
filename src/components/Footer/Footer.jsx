import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={`container ${styles.mt50}`}>
        <div className={styles.flex}>
          <div>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="20"
                viewBox="0 0 180 20"
              >
                <path
                  fill="#0A3241"
                  d="M18.231 13.515c0 4.996-4.902 6.485-9.2 6.485C4.244 20 .026 17.812 0 13.026h7.444c0 .917.849 1.162 1.699 1.162.818 0 1.534-.216 1.534-.917 0-.621-.467-.92-1.834-1.054C4.654 11.865.11 11.161.11 6.137.109 2.272 4.298 0 9.031 0c4.957 0 8.787 2.08 8.9 6.432h-7.255c-.031-.595-.767-.89-1.508-.89-.656 0-1.505.27-1.505 1.057 0 .646.521.945 1.179.996 4.024.324 9.389.785 9.389 5.92m.61-7.266h4.082v13.722h7.471V6.249h4.077V0h-15.63zM86.797 0v6.249h4.079v13.722h7.476V6.249h4.079V0zm-17.19 13.727h-7.91v-1.913h7.91V8.16h-7.91V6.249h7.91V0H54.25v19.971h15.357zm.918 6.244h15.356v-6.244H77.97v-1.913h7.911V8.16H77.97V6.249h7.911V0H70.525zm93.84-13.751h4.079v13.723h7.474V6.22H180V-.029h-15.635zM53.045 7.366c0-5.967-4.625-7.335-9.391-7.366h-8.267v19.971h7.476v-5.305h.52l2.438 5.305h7.527v-.621l-3.12-6.166c1.697-1.084 2.817-2.913 2.817-5.818zM43.82 8.674h-1.041V5.993h1.041c1.231 0 1.808.428 1.808 1.373 0 .968-.577 1.282-1.808 1.308zm81.215.402c1.507-.545 2.326-2.026 2.356-3.625.079-2.967-2.192-5.48-5.038-5.48h-12.1v19.973H122.3c3.365 0 5.939-2.367 6.073-5.787.14-2.628-1.063-4.166-3.338-5.081zm-7.309-3.767h1.399c1.367 0 1.287 2.086 0 2.086h-1.399V5.309zm1.864 9.152h-1.864v-2.502h1.864c.982 0 1.368.625 1.368 1.252 0 .625-.411 1.25-1.368 1.25zM160.608-.022h-7.995l-6.971 19.2v.764h7.304l.801-2.287h5.729l.8 2.287h7.302v-.764l-6.97-19.2zm-5.08 12.577l1.082-4.964 1.088 4.964h-2.17zm-26.16 7.388h15.356v-6.246h-7.912v-1.91h7.912V8.129h-7.912V6.22h7.912V-.029h-15.356z"
                ></path>
              </svg>
            </a>
          </div>

          {/*  добавить svg */}
          <div>
            <a href="#" className={styles.mr20}>VK</a>
            <a href="#" className={styles.mr20}>ТГ</a>
            <a href="#" >АВИТО</a>
          </div>
        </div>

        <p>C Inventive Retail Group, 2024</p>
      </div>
    </>
  );
};

export default Footer;
