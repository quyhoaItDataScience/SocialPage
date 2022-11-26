import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../api/user";

const EventDetailPage = () => {
  const [event, setEvent] = useState("");

  const { eventId } = useParams();
  useEffect(() => {
    const getEventId = async () => {
      await getEventById(eventId);
      setEvent(getEventId);
    };

    getEventId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="p-10 event-detail">
      <Container>
        <div className="p-10 shadow-lg page-container">
          <div className="flex justify-between mb-6">
            <div className="flex justify-center gap-x-10 ">
              <div className="image w-[300px] h-[300px] rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                  alt=""
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">
                  {event?.name || "Ten event"}
                </h1>
                <div className="flex items-center p-5 pl-0 gap-x-3 text-gray-400">
                  <p className="">16/03/2003</p>
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <p>Đại học KHTN TPHCM</p>
                </div>
              </div>
            </div>
            <div className="">
              <button
                className="px-8 py-2 w-fit text-white bg-orange-400 rounded-md
                hover:bg-orange-500 transition
              "
              >
                Tham gia
              </button>
            </div>
          </div>
          <div>
            <span>
              Chủ tịch Phan Văn Mãi giao Văn phòng UBND TP.HCM cùng Sở Nội vụ
              thành lập tổ công tác. 'Tổ này sẽ được nâng lên thành ban chỉ đạo
              của TP.HCM chỉ đạo các vấn đề tồn đọng về dự án treo', ông Mãi
              nói. Chiều 25.11, tại buổi làm việc với Chủ tịch UBND TP.HCM Phan
              Văn Mãi và Tổ Đại biểu Quốc hội (ĐBQH) đơn vị số 6, ông Nguyễn
              Minh Nhựt, Chủ tịch UBND Q.Bình Tân, tiếp tục nêu bức xúc về dự án
              treo trên địa bàn, đặc biệt là 2 dự án kéo dài trên 20 năm. Cụ
              thể, dự án khu công nghiệp Vĩnh Lộc rộng 112 ha có từ năm 1998,
              hiện còn khoảng 9,2 ha chưa bồi thường. Do dự án không thực hiện
              tiếp nên ảnh hưởng đến người dân chưa giải tỏa. “Quận đã nhiều lần
              làm việc với chủ đầu tư để tìm hướng ra nhưng chủ đầu tư chưa có
              hướng. Trong các buổi tiếp xúc cử tri của ĐBQH và HĐND TP.HCM,
              người dân liên tục phản ánh, kiến nghị sớm hoàn thành dự án”, ông
              Nhựt nói, đồng thời đề xuất nếu chủ đầu tư không đủ năng lực thì
              giao quận quy hoạch lại để đảm bảo quyền lợi của người dân. Tương
              tự, dự án khu dân cư Vĩnh Lộc rộng 110 ha, hiện còn 10 ha chưa bồi
              thường. Trong giai đoạn 2016 - 2020, HĐND TP.HCM thông qua 11 nghị
              quyết về thu hồi đất, chuyển đổi mục đích sử dụng đất đối với
              1.445 dự án. Tuy nhiên, báo cáo mới đây của Sở TN-MT đưa ra kết
              quả chỉ có 402 dự án hoàn thành, 741 dự án đang triển khai và có
              đến 302 chậm triển khai. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Unde sunt voluptatem quo cupiditate! Officia
              numquam tempore quos voluptates blanditiis impedit beatae quae
              veritatis consectetur! Architecto distinctio explicabo veritatis
              eius ea tempore recusandae officia nemo officiis necessitatibus
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventDetailPage;
