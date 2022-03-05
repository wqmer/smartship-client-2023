import Icon from "@ant-design/icons";
import React, { Component, PropTypes } from "react";

const AdminSvg = () => (
  <svg
    t="1635392039655"
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="21007"
    width="15"
    height="15"
  >
    <path
      d="M787.968 546.6624l2.56 0.4096c1.6896 0.512 3.2768 1.536 4.4544 2.9696l1.4336 2.4576 0.7168 2.9184 7.4752 51.7632 8.96 3.9424 8.4992 4.608 8.1408 5.12 7.68 5.632 48.7424-19.712 1.4336-0.3072 1.536-0.1536 2.816 0.1536 2.6112 0.8704 2.2528 1.536 1.6384 2.2528 39.4752 68.0448 1.1264 2.7136a9.728 9.728 0 0 1-0.256 5.4272l-1.2288 2.4576-1.8432 2.0992-41.6768 32.4608 1.024 6.2976c0.512 4.2496 0.768 8.6016 0.768 13.0048l-0.3072 6.5536-0.6144 6.5024-0.8704 6.2464 42.1376 32.4608 1.8432 2.048c1.024 1.536 1.6384 3.328 1.7408 5.12l-0.256 2.6112-1.1264 2.56-39.4752 67.9424-1.8944 2.304-2.304 1.6384-2.6624 0.9216-2.7136 0.1536-2.7136-0.6144-49.152-19.7632-7.5264 5.632-8.0896 5.0176-8.4992 4.5568-8.8064 4.096-7.424 51.7632a9.0112 9.0112 0 0 1-4.3008 6.8096l-2.56 1.1264-2.816 0.4096h-78.5408a9.5744 9.5744 0 0 1-7.2704-3.328l-1.4848-2.2528-0.8704-2.7648-7.4752-51.712a125.8496 125.8496 0 0 1-17.5104-8.5504l-8.0896-5.12-7.7312-5.632-48.6912 19.712-2.9184 0.512a11.2128 11.2128 0 0 1-5.4784-1.0752l-2.2528-1.536-1.6384-2.304-39.4752-67.9936a9.6768 9.6768 0 0 1-0.8704-8.192l1.2288-2.4576 1.8432-2.048 41.6768-32.4608-1.024-9.5232-0.3072-9.7792 0.3072-9.8304 1.024-9.472-41.6768-32.512a9.0624 9.0624 0 0 1-3.5328-7.168l0.3072-2.816 1.024-2.7136 39.424-67.9936a10.3424 10.3424 0 0 1 6.8608-4.864l2.7648-0.1536 2.7136 0.6144 48.64 19.7632 7.8336-5.632 8.192-5.0176 8.6016-4.5568 8.7552-4.096 7.4752-51.7632a9.0112 9.0112 0 0 1 4.3008-6.8096l2.56-1.1264 2.7648-0.4096h78.5408z m-275.968 17.2544c8.704 0 18.0736 0.3072 27.8528 0.9728l1.536 0.1024-3.7376 5.5808-43.6224 75.0592c-13.824 27.4432-10.5472 58.4704 10.7008 78.848l5.1712 4.5056 18.2784 14.2336-18.2784 14.1824c-23.552 20.5312-31.0272 51.5584-18.688 78.0288l3.2256 5.9904 17.2032 29.696H128v-102.4c0-136.192 255.8464-204.8 384-204.8z m236.4416 120.064a59.2384 59.2384 0 1 0 0.0512 118.3744 59.2384 59.2384 0 0 0-0.0512-118.3744zM512 153.6a166.4 166.4 0 1 1 0 332.8A166.4 166.4 0 1 1 512 153.6z"
      p-id="21008"
    ></path>
  </svg>
);
const AdminIcon = (props) => (
  <Icon style={{ fontSize: "18px" }} component={AdminSvg} {...props} />
);

export default AdminIcon;