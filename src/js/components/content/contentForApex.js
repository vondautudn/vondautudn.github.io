export const contentsForApex = [
    //Đầu tư của hộ dân cư
    {
        id: 'section-1',
        title: 'Đầu tư của hộ dân cư',
        icon: ['fas', 'box'],
        description: 'Phiếu số 02/VĐTH-Q và phiếu số 02/VĐTH-N về thu thập thông tin vốn đầu tư thực hiện của hộ dân cư. Áp dụng đối với hộ dân cư có đầu tư cho sản xuất kinh doanh và xây dựng sửa chữa nhà ở.',
        lastModifiedDate: '2022-08-13',
        sections: [
            {
                id: 'item-1-1', label: '1. Đối tượng áp dụng',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Áp dụng đối với hộ dân cư có thực hiện đầu tư nhằm duy trì và mở rộng sản xuất kinh doanh; về xây dựng mới, sửa chữa nhà ở, nâng cấp nhà ở trong kỳ điều tra. Không thu thập thông tin về các khoản chi cho mục đích tiêu dùng cuối cùng của hộ gia đình. 
                            </p>
                            <p>
                                Ví dụ: Trong kỳ hộ mua thêm ô tô, nếu ô tô dùng để phục vụ nhu cầu đi lại của các cá nhân trong hộ thì không được tính là đầu tư, nếu ô tô dùng để phục vụ cho sản xuất, kinh doanh của hộ như chở nguyên vật liệu, chở sản phẩm đi tiêu thụ,.. thì được tính là đầu tư của hộ trong kỳ.
                            </p>
                            `
                    },
                    // {
                    //     type: 'paragraph',
                    //     html:
                    //         `
                    //         <p>
                    //         Ví dụ: Trong kỳ hộ mua thêm ô tô, nếu ô tô dùng để phục vụ nhu cầu đi lại của các cá nhân trong hộ thì không được tính là đầu tư, nếu ô tô dùng để phục vụ cho sản xuất, kinh doanh của hộ như chở nguyên vật liệu, chở sản phẩm đi tiêu thụ,.. thì được tính là đầu tư của hộ trong kỳ.
                    //         </p>
                    //         `
                    // },
                ]
            },
            {
                id: 'item-1-2', label: '2. Các khoản mục đầu tư của hộ dân cư',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                <b>- Hộ dân cư đầu tư cho nhà ở: </b>Là hộ dân cư có đầu tư cho việc xây dựng mới, sửa chữa, nâng cấp nhà ở.
                            </p>
                            <p>
                                <b>- Hộ dân cư đầu tư cho sản xuất kinh doanh: </b>Là hộ dân cư có đầu tư cho việc xây dựng mới, sửa chữa, nâng cấp, mua sắm tài sản cố định, mua con giống như trâu, bò, cây trồng lâu năm,… nhằm mục đích duy trì và mở rộng sản xuất kinh doanh (SXKD) của hộ.
                            </p>
                            `
                    },
                    // {
                    //     type: 'paragraph',
                    //     html:
                    //         `
                    //         <p>
                    //             <b>- Hộ dân cư đầu tư cho sản xuất kinh doanh:</b> Là hộ dân cư có đầu tư cho việc xây dựng mới, sửa chữa, nâng cấp, mua sắm tài sản cố định, mua con giống như trâu, bò, cây trồng lâu năm,… nhằm mục đích duy trì và mở rộng sản xuất kinh doanh (SXKD) của hộ.
                    //         </p>
                    //         `
                    // },
                ]
            },
            {
                id: 'item-1-3', label: '2.1. Xây dựng cơ bản',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là tổng số tiền mà hộ đã đầu tư xây dựng trong kỳ, kể cả chi phí lao động tự làm, giá trị nguyên vật liệu tự túc, bao gồm: mua nguyên vật liệu như xi măng, sắt thép, vôi, gạch ngói, gỗ và chi phí mua máy móc thiết bị (gồm máy móc đặt vào công trình); thuê nhân công, thuê máy móc thiết bị thi công, các khoản chi phí vận chuyển vật liệu, chi phí về điện, nước.
                            </p>
                            <p>
                                Đối với hộ có đầu tư cho nhà ở: Gồm toàn bộ chi phí XD mới nhà ở như: chi phí phá và tháo dỡ ngôi nhà, chi phí san lấp mặt bằng XD, đóng cọc, XD, đổ khung, đổ bê tông, ốp đá, bắc giàn giáo, lợp mái..., chi phí hoàn thiện công trình nhà như lắp kính, trát vữa, quét vôi, trang trí, lát sàn, hoàn thiện phần mộc, làm sạch ngoại thất... Chia ra:
                            </p>
                            <p>
                                - Xây dựng và lắp đặt: Là toàn bộ chi phí cho hoạt động XD và lắp đặt các thiết bị đi kèm với công trình XD như: XD các hạng mục công trình, lắp đặt thiết bị, hoàn thiện công trình, chi phí phá dỡ các vật liệu kiến trúc cũ, san lấp mặt bằng XD, XD công trình tạm, công trình phụ trợ phục vụ thi công, nhà tạm.
                            </p>
                            <p>
                                - Máy móc, thiết bị: Là toàn bộ giá trị của máy móc thiết bị được lắp đặt vào công trình XD (không bao gồm chi phí lắp đặt).
                            </p>
                            <p>
                                - Vốn đầu tư xây dựng cơ bản khác: Là các khoản chi phí khác trong XDCB chưa bao gồm ở các mục trên.
                            </p>
                            <p>
                                <span style="font-style: italic">Tiền thuê đất hoặc mua quyền sử dụng đất: </span><span>Là số tiền hộ chi ra để thuê đất hoặc mua quyền sử dụng đất hoặc mua đất, mua nhà phục vụ cho SXKD và cho mục đích ở.</span>
                            </p>
                            <p>
                                <b style="font-style: italic">Lưu ý: </b><span style="font-style: italic">Nếu hộ không nhớ chính xác các khoản chi phí trên, điều tra viên cùng với hộ ước tính bằng cách lấy khối lượng từng loại nguyên vật liệu, ngày công lao động thuê ngoài nhân với đơn giá bình quân ở địa phương để tính vào tổng vốn đầu tư. Lao động tự làm và nguyên vật liệu tự túc ước tính như lao động thuê ngoài và nguyên vật liệu mua ngoài.</span>
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-1-4', label: '2.2. Mua sắm tài sản cố định dùng cho sản xuất không qua xây dựng cơ bản',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là tổng số tiền thực tế mà hộ đã chi trong kỳ để mua TSCĐ không qua XDCB để phục vụ sản xuất kinh doanh của hộ bao gồm cả chi phí lắp đặt, chạy thử (có thể trong kỳ hộ đã thanh toán nhưng chưa nhận được).
                            </p>
                            <p>
                                TSCĐ không qua XDCB là các máy móc, thiết bị không đi kèm với công trình XD, không tính vào phần XDCB ở trên. TSCĐ không qua XDCB bao gồm: máy móc, thiết bị, phương tiện vận tải.
                            </p>
                            <p>
                                <b style="font-style: italic">Lưu ý: </b><span>Đối với TSCĐ tuy đã qua sử dụng nhưng được nhập khẩu từ nước ngoài thì được coi là tài sản mới vì tài sản đó thực tế sẽ làm tăng tài sản tích luỹ cho toàn xã hội.</span>
                            </p>
                            `
                    }
                ]
            },
            {
                id: 'item-1-5', label: '2.3. Sửa chữa, nâng cấp tài sản cố định',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là số tiền hộ đã chi trong kỳ để sửa chữa, nâng cấp TSCĐ.
                            </p>
                            <p>
                                - Sửa chữa TSCĐ: Là số tiền hộ đã chi cho việc duy tu, bảo dưỡng, thay thế, sửa chữa những hư hỏng phát sinh trong quá trình hoạt động nhằm khôi phục lại những năng lực hoạt động theo trạng thái hoạt động tiêu chuẩn ban đầu của TSCĐ. 
                            </p>
                            <p>
                                - Nâng cấp TSCĐ: Là số tiền hộ chi cho hoạt động cải tạo, xây lắp, trang bị bổ sung thêm cho TSCĐ nhằm nâng cao công suất, chất lượng sản phẩm, tính năng, tác dụng của TSCĐ so với mức ban đầu hoặc kéo dài thời gian sử dụng của TSCĐ; đưa vào áp dụng quy trình công nghệ SX mới làm giảm chi phí hoạt động của TSCĐ so với trước.
                            </p>
                            <p>
                                - Sửa chữa và nâng cấp nhà ở: Là toàn bộ chi phí thực tế chi ra trong kỳ cho công việc sửa chữa, nâng cấp, mở rộng nhà ở của hộ, bao gồm chi phí thanh toán như vật liệu, nhân công, thuê máy móc thiết bị, ...và vật liệu, ngày công tự túc của hộ gia đình.
                            </p>
                            `
                    }
                ]
            },
            {
                id: 'item-1-6', label: '2.4. Đầu tư khác',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Bao gồm các khoản chi phí tạo nên TSCĐ vô hình, các khoản chi đầu tư sản xuất kinh doanh chưa kể ở trên, như chi phí nâng cấp, cải tạo đất...
                            </p>
                            <p>
                                <b>Quy ước: </b><span>Trường hợp hộ mua ô tô vừa để phục vụ SXKD, vừa phục vụ nhu cầu đi lại của các thành viên trong hộ vẫn được tính là ĐT cho SXKD trong trường hợp ô tô phục vụ SXKD là chủ yếu.</span>
                            </p>
                            <p>
                                <b style="text-decoration: underline>Lưu ý:</b>
                            </p>
                            <p>
                                - Hộ ĐT mua nhà ở của các dự án bất động sản: Không kê khai khoản tiền này vì khoản tiền ĐT này của hộ đã được thu thập qua các dự án bất động sản.
                            </p>
                            <p>
                                - Không bao gồm ĐT của hộ để mua lại nhà ở đã qua sử dụng (căn hộ chung cư...) để ở: Không kê khai khoản tiền này vì không làm tăng tài sản của xã hội.
                            </p>
                            <p>
                                - Trường hợp hộ có ĐT bằng ngoại tệ, vàng, bạc... (cất trữ ở nhà hoặc gửi ngân hàng) phải quy ra tiền Việt Nam đồng theo tỷ giá của Ngân hàng nhà nước (không bao gồm vàng, bạc trang sức).
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-1-7', label: '3. Các nguồn vốn đầu tư của hộ dân cư',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            `
                    },
                ]
            },
            {
                id: 'item-1-8', label: '3.1. Ngân sách nhà nước',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là nguồn vốn mà nhà nước hỗ trợ tạo điều kiện, khuyến khích chủ hộ đầu tư cho sản xuất kinh doanh, phát triển ngành nghề… và/hoặc là nguồn vốn mà Nhà nước hỗ trợ theo chương trình mục tiêu quốc gia, xóa nhà tạm, nhà tranh đối với những hộ gia đình hưởng chính sách xã hội.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-1-9', label: '3.2. Tín dụng đầu tư phát triển',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là số tiền vốn mà hộ được vay từ nguồn vốn đầu tư phát triển của nhà nước để phục vụ cho đầu tư, mở rộng sản xuất kinh doanh.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-1-10', label: '3.3. Vốn vay',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Số tiền đầu tư của hộ đi vay từ các ngân hàng thương mại, vay từ các ngân hàng, tổ chức nước ngoài; vay từ các tổ chức (Hội Phụ nữ, chương trình xoá đói giảm nghèo, ...) và vay của các cá nhân.
                            </p>
                            <p>
                                - Vay ngân hàng thương mại nhà nước: Nếu hộ vay của các ngân hàng thương mại nhà nước để đầu tư (là các ngân hàng của nhà nước) như Ngân hàng Công thương Việt Nam, Ngân hàng Nông nghiệp và Phát triển nông thôn, Ngân hàng Đầu tư và Phát triển...
                            </p>
                            <p>
                                - Vay ngân hàng ngoài nhà nước: Nếu hộ vay của các ngân hàng thương mại ngoài nhà nước như Ngân hàng Techcombank, Ngân hàng Đông á, Ngân hàng Thương mại cổ phần Sài Gòn....
                            </p>
                            <p>
                                - Vay khác: Số tiền vay từ các tổ chức, cá nhân trong và ngoài nước.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-1-11', label: '3.4. Vốn tự có',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là tổng số tiền hình thành từ vốn tích luỹ tài sản từ lợi nhuận trích ra để đầu tư, từ thanh lý, từ vốn khấu hao tài sản cố định, từ hình thức huy động vốn cổ phần, vốn góp liên doanh, từ tiết kiệm, để dành, bán tài sản của hộ hoặc tài sản thừa kế và lao động tự làm (lao động của những người trong hộ gia đình và anh em, bạn bè làm giúp), nguyên vật liệu tự túc được quy ra tiền. Vốn tự có có thể là tiền hoặc hiện vật.
                            </p>
                            <p>
                                - Vốn bằng hiện vật: Được quy ra giá trị theo giá tương ứng của từng loại hiện vật trên thị trường;
                            </p>
                            <p>
                                - Vốn bằng nguyên vật liệu tự có: Ghi số tiền được qui ra từ lao động tự làm và nguyên vật liệu tự túc theo giá thị trường.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-1-12', label: '3.5. Vốn huy động từ các nguồn khác',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Số tiền hộ nhận được từ các tổ chức, cá nhân, anh em bạn bè trong và ngoài nước tặng, biếu, số tiền này hộ được toàn quyền sử dụng và không phải hoàn trả.
                            </p>
                            `
                    },
                ]
            },
        ],
    },
    // Đầu tư của trang trại
    {
        id: 'section-2',
        title: 'Đầu tư của trang trại',
        icon: ['fas', 'box'],
        description: 'Phiếu số 03/VĐTT-Q và phiếu số 03/VĐTT-N về thu thập thông tin vốn đầu tư thực hiện của trang trại. Áp dụng đối với các trang trại.',
        lastModifiedDate: '2022-08-13',
        sections: [
            {
                id: 'item-2-1', label: '1. Đối tượng áp dụng',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Áp dụng đối với các trang trại có thực hiện đầu tư nhằm duy trì và mở rộng sản xuất kinh doanh hoặc đầu tư về xây dựng mới, sửa chữa, nâng cấp nhà ở trong kỳ điều tra. Không thu thập thông tin về các khoản chi cho mục đích tiêu dùng cuối cùng của trang trại.
                            </p>
                            <p>
                                Ví dụ trong kỳ trang trại mua thêm ô tô nếu ô tô dùng để phục vụ nhu cầu đi lại của các cá nhân trong trang trại thì không được tính là đầu tư, nếu ô tô dùng để phục vụ sản xuất kinh doanh như chở thành phẩm đi bán hàng, chở nguyên vật liệu về để tiến hành sản xuất kinh doanh thì được tính là đầu tư của trang trại trong kỳ.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-2-2', label: '2. Các khoản mục đầu tư của trang trại',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                - Đầu tư cho nhà ở: Là số tiền hộ trang trại chi ra cho việc xây dựng (XD) mới, sửa chữa, nâng cấp nhà ở.
                            </p>
                            <p>
                                - Đầu tư cho SXKD: Là số tiền hộ trang trại đầu tư nhằm duy trì và mở rộng sản xuất kinh doanh.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-2-3', label: '2.1. Xây dựng cơ bản',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là tổng số tiền mà trang trại đã đầu tư XD trong kỳ, kể cả chi phí LĐ tự làm, giá trị nguyên vật liệu tự túc, bao gồm: mua nguyên vật liệu như xi măng, sắt thép, vôi, gạch ngói, gỗ và chi phí mua máy móc thiết bị (gồm máy móc đặt vào công trình); thuê nhân công, thuê máy móc thiết bị thi công, các khoản chi phí vận chuyển vật liệu, chi phí về điện, nước. Cụ thể:
                            </p>
                            <p>
                                (1) Đầu tư cho SXKD gồm: Chi phí XD các hạng mục công trình; chi phí mua và lắp đặt máy móc thiết bị; chi phí khai hoang, cải tạo, san, lấp đất; chi phí XD và cải tạo ao nuôi trồng thuỷ sản; chi phí trồng mới, chăm sóc vườn cây lâu năm trong thời gian chưa thu hoạch sản phẩm; chi phí trồng rừng và chăm sóc rừng trong thời gian chưa thu hoạch sản phẩm; chi phí đầu tư XDCB khác.
                            </p>
                            <p>
                                <span>(2) Đầu tư cho nhà ở: Gồm toàn bộ chi phí </span><span><b>XD mới </b></span><span>nhà ở, bao gồm: chi phí phá và tháo dỡ ngôi nhà, chi phí san lấp mặt bằng XD, đóng cọc, XD, đổ khung, đổ bê tông, ốp đá, bắc giàn giáo, lợp mái..., chi phí hoàn thiện công trình nhà như lắp kính, trát vữa, quét vôi, trang trí, lát sàn, hoàn thiện phần mộc, làm sạch ngoại thất... Chia ra:</span>
                            </p>
                            <p>
                                - Xây dựng và lắp đặt: Là toàn bộ chi phí cho hoạt động XD và lắp đặt các máy móc thiết bị đi kèm với công trình XD như: XD các hạng mục công trình, lắp đặt thiết bị, hoàn thiện công trình, chi phí phá dỡ các vật liệu kiến trúc cũ, san lấp mặt bằng XD, XD công trình tạm, công trình phụ trợ phục vụ thi công, nhà tạm.
                            </p>
                            <p>
                                - Máy móc, thiết bị: Là toàn bộ giá trị của máy móc thiết bị được lắp đặt vào công trình XD (không bao gồm chi phí lắp đặt) như: điều hòa, nóng lạnh...
                            </p>
                            <p>
                                - Vốn đầu tư XDCB khác: Là các khoản chi phí khác trong XDCB không bao gồm ở trên.
                            </p>
                            <p>
                                <span style="font-style: italic">Tiền thuê đất hoặc mua quyền sử dụng đất: </span><span>Là số tiền trang trại chi ra để thuê đất hoặc mua quyền sử dụng đất hoặc mua đất, mua nhà phục vụ cho SXKD và cho mục đích ở.</span>
                            </p>
                            <p>
                                <span style="font-style: italic"><b>Lưu ý: </b></span><span>Nếu chủ trang trại không nhớ chính xác các khoản chi phí trên, điều tra viên cùng với chủ trang trại ước tính bằng cách lấy khối lượng từng loại nguyên vật liệu, ngày công lao động thuê ngoài nhân với đơn giá bình quân ở địa phương để tính vào tổng vốn đầu tư. Lao động tự làm và nguyên vật liệu tự túc ước tính như lao động thuê ngoài và nguyên vật liệu mua ngoài.</span>
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-2-4', label: '2.2. Mua sắm tài sản cố định dùng cho sản xuất không qua xây dựng cơ bản',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là tổng số tiền thực tế mà trang trại đã chi trong kỳ để mua TSCĐ không qua XDCB bao gồm: mua nhà xưởng, kho tàng; mua vườn cây lâu năm; mua rừng cây lâm nghiệp; mua đất trồng cây hàng năm; mua mặt nước nuôi trồng thuỷ sản; mua gia súc, gia cầm cơ bản, mua máy móc thiết bị không qua XD, mua TSCĐ khác.
                            </p>
                            <p>
                                <span style="font-style: italic"><b>Lưu ý: </b></span><span>Đối với TSCĐ tuy đã qua sử dụng nhưng được nhập khẩu từ nước ngoài thì được coi là tài sản mới vì tài sản đó thực tế sẽ làm tăng tài sản tích luỹ cho toàn xã hội.</span>
                            </p>
                            `
                    }
                ]
            },
            {
                id: 'item-2-5', label: '2.3. Sửa chữa, nâng cấp TSCĐ',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là số tiền trang trại đã chi trong kỳ để sửa chữa, nâng cấp TSCĐ.
                            </p>
                            <p>
                                - Sửa chữa TSCĐ: Là số tiền trang trại đã chi cho việc duy tu, bảo dưỡng, thay thế, sửa chữa những hư hỏng phát sinh trong quá trình hoạt động nhằm khôi phục lại những năng lực hoạt động theo trạng thái hoạt động tiêu chuẩn ban đầu của TSCĐ.
                            </p>
                            <p>
                                - Nâng cấp TSCĐ: Là số tiền trang trại chi cho hoạt động cải tạo, xây lắp, trang bị bổ sung thêm cho TSCĐ nhằm nâng cao công suất, chất lượng sản phẩm, tính năng, tác dụng của TSCĐ so với mức ban đầu hoặc kéo dài thời gian sử dụng của TSCĐ; đưa vào áp dụng quy trình công nghệ sản xuất mới làm giảm chi phí hoạt động của TSCĐ so với trước.
                            </p>
                            <p>
                                - Sửa chữa và nâng cấp nhà ở: Là toàn bộ chi phí thực tế chi ra trong kỳ cho công việc sửa chữa, nâng cấp, mở rộng nhà ở của trang trại, bao gồm chi phí thanh toán như vật liệu, nhân công, thuê máy móc thiết bị, ...và vật liệu, ngày công tự túc của trang trại.
                            </p>
                            `
                    }
                ]
            },
            {
                id: 'item-2-6', label: '2.4. Đầu tư khác',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Bao gồm các khoản chi phí tạo nên TSCĐ vô hình, các khoản chi đầu tư SXKD chưa kể ở trên, như chi phí nâng cấp, cải tạo đất...
                            </p>
                            <p>
                                <span style="font-style: italic"><b>Lưu ý: </b></span><span>Trường hợp trong danh sách điều tra đã xác định trang trại có đầu tư trong kỳ, đến thời điểm điều tra, hộ không còn đủ tiêu chí là trang trại nữa vẫn thuộc đối tượng điều tra nếu chủ trang trại hoặc người nắm được thông tin của trang trại có thể trả lời được nội dung các chỉ tiêu trong phiếu điều tra.</span>
                            </p>
                            <p>
                                <span style="font-style: italic"><b>Quy ước: </b></span><span>Trường hợp trang trại mua ô tô vừa để phục vụ SXKD, vừa phục vụ nhu cầu đi lại của các thành viên trong hộ vẫn được tính là đầu tư cho SXKD trong trường hợp ô tô phục vụ SXKD là chủ yếu.</span>
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-2-7', label: '3. Các nguồn vốn đầu tư của trang trại',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            `
                    },
                ]
            },
            {
                id: 'item-2-8', label: '3.1. Ngân sách nhà nước',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là số tiền mà nhà nước hỗ trợ tạo điều kiện, khuyến khích chủ trang trại đầu tư cho SXKD, phát triển ngành nghề... và/hoặc nguồn vốn mà Nhà nước hỗ trợ theo chương trình mục tiêu quốc gia, xoá nhà tạm, nhà tranh,.. đối với những hộ được hưởng chính sách xã hội.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-2-9', label: '3.2. Tín dụng đầu tư phát triển',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là số tiền vốn mà trang trại được vay từ nguồn vốn đầu tư phát triển của nhà nước để phục vụ cho đầu tư, mở rộng SXKD.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-2-10', label: '3.3. Vốn vay',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là số tiền đầu tư của trang trại vay từ các ngân hàng thương mại, các quỹ tín dụng trong nước; vay từ các ngân hàng, tổ chức nước ngoài; vay từ các tổ chức (Hội Phụ nữ, chương trình xoá đói giảm nghèo...) và vay của các cá nhân.
                            </p>
                            <p>
                                - Vay ngân hàng thương mại nhà nước: Là số tiền đầu tư của trang trại vay của các ngân hàng thương mại nhà nước để đầu tư như Ngân hàng Công thương Việt Nam, Ngân hàng Nông nghiệp và Phát triển nông thôn, Ngân hàng Đầu tư và Phát triển...
                            </p>
                            <p>
                                - Vay ngân hàng ngoài nhà nước: Là số tiền đầu tư của trang trại vay của các ngân hàng thương mại ngoài nhà nước như Ngân hàng Techcombank, Đông Á, Thương mại cổ phần Sài Gòn...
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-2-11', label: '3.4. Vốn tự có',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là tổng số tiền đầu tư từ lợi nhuận hoạt động của trang trại, từ huy động vốn cổ phần, vốn góp liên doanh, từ tiết kiệm, bán tài sản của trang trại hoặc tài sản thừa kế và lao động tự làm (lao động của những người trong trang trại và anh em, bạn bè làm giúp), nguyên vật liệu tự túc được quy ra tiền. Vốn tự có có thể là tiền hoặc hiện vật.
                            </p>
                            <p>
                                - Vốn bằng hiện vật: Là số tiền được quy ra giá trị theo giá tương ứng của từng loại hiện vật trên thị trường;
                            </p>
                            <p>
                                - Vốn bằng nguyên vật liệu tự có: Là số tiền được quy ra từ lao động tự làm và nguyên vật liệu tự túc theo giá thị trường.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-2-12', label: '3.5. Vốn huy động từ các nguồn khác',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là số tiền đầu tư từ nguồn đóng góp tự nguyện, cho, biếu, tặng của các tổ chức, cá nhân trong và ngoài nước, nguồn huy động ngoài các nguồn nêu trên. Số tiền này chủ trang trại được toàn quyền sử dụng và không phải hoàn trả.
                            </p>
                            `
                    },
                ]
            },
        ],
    },
    // Đầu tư của doanh nghiệp
    {
        id: 'section-3',
        title: 'Đầu tư của doanh nghiệp',
        icon: ['fas', 'box'],
        description: 'Phiếu số 04/VĐTDN-Q về thu thập thông tin vốn đầu tư thực hiện của doanh nghiệp. Áp dụng đối với doanh nghiệp, hợp tác xã.',
        lastModifiedDate: '2022-08-13',
        sections: [
            {
                id: 'item-3-1', label: '1. Đối tượng áp dụng',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Phiếu này nhằm thu thập thông tin về vốn đầu tư thực hiện hàng quý của các loại hình doanh nghiệp nhà nước, doanh nghiệp ngoài nhà nước, doanh nghiệp có vốn đầu tư trực tiếp nước ngoài, hợp tác xã/liên hợp tác xã đang trong quá trình đầu tư chuẩn bị cho sản xuất kinh doanh hoặc đang hoạt động sản xuất kinh doanh được chọn vào mẫu điều tra.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-2', label: '2. Các khoản mục đầu tư của doanh nghiệp',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                <span>Vốn đầu tư thực hiện của doanh nghiệp là số vốn đầu tư phục vụ cho sản xuất kinh doanh của doanh nghiệp mà thực tế doanh nghiệp chi ra </span><span style="font-style: italic"><b>nhằm tăng năng lực sản xuất kinh doanh của doanh nghiệp phục vụ cho hoạt động sản xuất kinh doanh </b></span><span>để mục đích sau một chu kỳ hoạt động hoặc sau một thời gian nhất định sẽ thu về một giá trị kinh tế lớn hơn giá trị vốn đã bỏ ra ban đầu. Bao gồm các khoản mục đầu tư:</span>
                            </p>
                            <p>
                                - Xây dựng cơ bản (xây dựng trụ sở làm việc, xây dựng nhà xưởng sản xuất, kho tàng,..);
                            </p>
                            <p>
                                - Mua sắm TSCĐ dùng cho sản xuất không qua xây dựng cơ bản; 
                            </p>
                            <p>
                                - Sửa chữa, nâng cấp tài sản cố định;
                            </p>
                            <p>
                                - Bổ sung thêm vốn lưu động từ nguồn vốn tự có của doanh nghiệp;
                            </p>
                            <p>
                                - Đầu tư cho nghiên cứu khoa học, phát triển công nghệ và nguồn nhân lực của doanh nghiệp
                            </p>
                            <p>
                                <span><b>Lưu ý: </b></span><span>Đối với doanh nghiệp, vốn đầu tư thực hiện trong quý bao gồm cả các khoản đầu tư mang tính chuyển nhượng quyền sử dụng hoặc quyền sở hữu giữa các cá nhân, các đơn vị, các tổ chức trong nội bộ nền kinh tế. Cụ thể là vốn đầu tư trong quý của doanh nghiệp được tính cả tiền mua quyền sử dụng đất, tiền mua các thiết bị, nhà cửa, kho tàng đã qua sử dụng của đơn vị, cá nhân trong nước trong kỳ báo cáo.</span>
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-3', label: '2.1. Xây dựng cơ bản',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Toàn bộ vốn bỏ ra để cho việc khảo sát quy hoạch xây dựng công trình, chuẩn bị đầu tư, thiết kế; chi xây dựng, mua sắm và lắp đặt thiết bị; các chi khác được ghi trong tổng dự toán (bao gồm cả tiền chuyển quyền sử dụng đất). Vốn đầu tư xây dựng cơ bản bao gồm: Xây dựng và lắp đặt (vốn xây lắp); Máy móc, thiết bị (vốn thiết bị) và vốn đầu tư xây dựng cơ bản khác.
                            </p>
                            <p>
                                <b>- Xây dựng và lắp đặt bao gồm:</b>
                            </p>
                            <p>
                                + Chi phá và tháo dỡ các vật liệu kiến trúc cũ (có tính đến giá trị vật tư, vật liệu được thu hồi (nếu có) để giảm vốn đầu tư).
                            </p>
                            <p>
                                + Chi san lấp mặt bằng xây dựng.
                            </p>
                            <p>
                                + Chi xây dựng công trình tạm, công trình phụ trợ phục vụ thi công (đường thi công, điện nước, nhà xưởng...), nhà tạm tại hiện trường để ở và điều hành thi công (nếu có).
                            </p>
                            <p>
                                + Chi xây dựng các hạng mục công trình như làm mới, mở rộng, cải tạo và khôi phục các công trình xây dựng (bao gồm cả việc lắp ghép các cấu kiện trên mặt bằng xây dựng), các hoạt động như đóng cọc, đổ khung, đổ bê tông, ốp đá, bắc giàn giáo, lợp mái, sửa chữa làm thay đổi hoặc mở rộng các công trình...
                            </p>
                            <p>
                                + Chi lắp đặt thiết bị gồm: Lắp đặt trang thiết bị vật dụng mà chức năng xây dựng phải làm, những hoạt động này thường được thực hiện tại chân công trình xây dựng. Chi phí lắp đặt thiết bị còn bao gồm cả chi phí cho thăm dò, lắp đặt các hệ thống lò sưởi, điều hoà nhiệt độ, thiết bị thông gió, chống ẩm, lắp đặt ăng ten, hệ thống báo động và các công việc khác thuộc về điện, hệ thống ống tưới nước, thang máy, cầu thang tự động, lắp đặt ống dẫn trong xử lý công nghiệp, lắp máy lạnh, hệ thống chiếu sáng, hệ thống tín hiệu...
                            </p>
                            <p>
                                + Hoàn thiện công trình xây dựng gồm: Các hoạt động khác nhau có liên quan đến hoàn thiện hoặc kết thúc một công trình như lắp kính, trát vữa, quét vôi, trang trí, lát sàn, hoàn thiện phần mộc, công việc kiến trúc âm thanh, làm sạch ngoại thất... kể cả việc tu sửa các loại trang thiết bị đã đề cập ở trên.
                            </p>
                            <p>
                                Chi di chuyển thiết bị thi công và lực lượng xây dựng (trong trường hợp chỉ định thầu nếu có).
                            </p>
                            <p>
                                <span><b>- Máy móc, thiết bị bao gồm: </b></span><span>Toàn bộ chi phí để mua sắm thiết bị, máy móc dụng cụ dùng cho sản xuất, kinh doanh, nghiên cứu, thí nghiệm... (kể cả thiết bị cần lắp đặt và thiết bị máy móc không cần lắp đặt) như:</span>
                            </p>
                            <p>
                                + Chi mua sắm thiết bị công nghệ gồm cả thiết bị phi tiêu chuẩn cần sản xuất, gia công (nếu có), các trang thiết bị khác phục vụ sản xuất, làm việc, sinh hoạt của công trình (bao gồm thiết bị lắp đặt và thiết bị không cần lắp đặt), kể cả phần đường ống, đường dây trực thuộc máy móc.
                            </p>
                            <p>
                                + Chi mua những dụng cụ dùng trong sản xuất (bàn thợ, đá mài,…) dụng cụ đo lường, thiết bị trong phòng thí nghiệm, dụng cụ phục vụ quản lý kinh doanh (máy tính, máy in…).
                            </p>
                            <p>
                                + Chi vận chuyển từ nơi mua đến công trình, chi phí lưu kho, lưu bãi, lưu container (nếu có) tại cảng Việt Nam (đối với các thiết bị nhập khẩu), chi phí bảo quản, bảo dưỡng tại kho bãi ở hiện trường; chi phí gia công, kiểm tra thiết bị, máy móc khi đưa vào lắp.
                            </p>
                            <p>
                                + Thuế và phí bảo hiểm thiết bị công trình.
                            </p>
                            <p>
                                <span><b>- Vốn đầu tư xây dựng cơ bản khác: </b></span><span>Ngoài vốn xây lắp và thiết bị, trong tổng vốn đầu tư xây dựng cơ bản còn có một bộ phận vốn đầu tư khác là:</span>
                            </p>
                            <p>
                                + Vốn khác cho giai đoạn chuẩn bị đầu tư:
                            </p>
                            <p>
                                ++ Chi lập báo cáo nghiên cứu tiền khả thi, báo cáo nghiên cứu khả thi.
                            </p>
                            <p>
                                ++ Chi tuyên truyền, quảng cáo (nếu có).
                            </p>
                            <p>
                                ++ Chi nghiên cứu khoa học, công nghệ có liên quan đến dự án đầu tư.
                            </p>
                            <p>
                                ++ Lệ phí thẩm định báo cáo nghiên cứu khả thi của dự án đầu tư.
                            </p>
                            <p>
                                + Vốn khác ở giai đoạn thực hiện đầu tư:
                            </p>
                            <p>
                                ++ Chi khởi công công trình (nếu có).
                            </p>
                            <p>
                                ++ Chi đền bù và tổ chức thực hiện trong quá trình đền bù đất đai hoa màu, di chuyển dân cư và các công trình trên mặt bằng xây dựng, chi phí phục vụ cho công tác tái định cư và phục hồi (đối với công trình xây dựng của dự án đầu tư có yêu cầu tái định cư và phục hồi).
                            </p>
                            <p>
                                ++ Tiền thuê đất hoặc mua quyền sử dụng đất.
                            </p>
                            <p>
                                ++ Chi khảo sát xây dựng, thiết kế công trình, chi phí mô hình thí nghiệm (nếu có), chi phí lập hồ sơ mời thầu, chi phí cho việc phân tích, đánh giá kết quả đấu thầu, mua sắm vật tư thiết bị; chi phí giám sát thi công xây dựng và các chi phí tư vấn khác,...
                            </p>
                            <p>
                                ++ Chi cho hoạt động của ban quản lý dự án.
                            </p>
                            <p>
                                ++ Chi phí bảo vệ an toàn, bảo vệ môi trường trong quá trình xây dựng công trình (nếu có).
                            </p>
                            <p>
                                ++ Chi kiểm định vật liệu vào công trình (nếu có).
                            </p>
                            <p>
                                ++ Chi lập, thẩm tra đơn giá dự toán; chi phí quản lý.
                            </p>
                            <p>
                                ++ Chi bảo hiểm công trình.
                            </p>
                            <p>
                                ++ Lệ phí địa chính.
                            </p>
                            <p>
                                ++ Lệ phí thẩm định thiết kế kỹ thuật hoặc thiết kế kỹ thuật - thi công, tổng dự toán công trình.
                            </p>
                            <p>
                                + Vốn khác ở giai đoạn kết thúc xây dựng đưa dự án vào khai thác sử dụng:
                            </p>
                            <p>
                                ++ Chi thực hiện việc quy đổi vốn; thẩm tra và phê duyệt quyết toán vốn đầu tư công trình.
                            </p>
                            <p>
                                ++ Chi tháo dỡ công trình tạm, công trình phụ trợ phục vụ thi công, nhà tạm (trừ giá trị thu hồi)...
                            </p>
                            <p>
                                ++ Chi thu dọn vệ sinh công trình; tổ chức nghiệm thu khánh thành và bàn giao công trình.
                            </p>
                            <p>
                                ++ Chi đào tạo công nhân kỹ thuật và cán bộ quản lý sản xuất (nếu có).
                            </p>
                            <p>
                                ++ Chi thuê chuyên gia vận hành và sản xuất trong thời gian chạy thử (nếu có).
                            </p>
                            <p>
                                ++ Chi nguyên liệu, năng lượng và nhân lực cho quá trình chạy thử không tải và có tải (trừ giá trị sản phẩm thu hồi được)...
                            </p>
                            <p>
                                <b style="font-style: italic">Một số lưu ý khi khai thác thông tin giá trị đầu tư xây dựng cơ bản của doanh nghiệp:</b>
                            </p>
                            <p>
                                <span><b>(1) Trường hợp 1: </b></span><span>Trong kỳ doanh nghiệp có thực hiện việc xây dựng cơ bản (xây nhà xưởng, xây trụ sở làm việc…) phục vụ hoạt động sản xuất kinh doanh của doanh nghiệp thì Giá trị đầu tư XDCB trong kỳ được lấy từ </span><span><b>số phát sinh bên Nợ </b><span>của tài khoản 241 (Xây dựng cơ bản dở dang) trong bảng cân đối tài khoản của doanh nghiệp.</span>
                            </p>
                            <p>
                                <span><b>(2) Trường hợp 2: </b></span><span>Trong kỳ doanh nghiệp mua tài sản cố định hữu hình là nhà cửa, vật kiến trúc gắn liền với quyền sử dụng đất và đưa vào sử dụng ngay cho hoạt động sản xuất kinh doanh (không qua XDCB) như mua nhà dùng để làm việc hoặc mua nhà xưởng dùng để sản xuất thì sẽ ghi vào “Vốn xây dựng và lắp đặt” của mã 21 “Xây dựng cơ bản” và tách ra giá trị vốn đầu tư xây dựng cơ bản khác là quyền sử dụng đất (mã 24 và 26).</span>
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-4', label: '2.2. Mua sắm tài sản cố định (TSCĐ) dùng cho sản xuất không qua xây dựng cơ bản',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là toàn bộ vốn đầu tư mua TSCĐ bổ sung thêm trong kỳ và không liên quan đến hoạt động xây dựng cơ bản. Bao gồm:
                            </p>
                            <p>
                                - Tài sản cố định hữu hình (tài khoản 211): Máy móc thiết bị; phương tiện vận tải, truyền dẫn; thiết bị, dụng cụ quản lý; cây lâu năm, súc vật làm việc và cho sản phẩm; TSCĐ hữu hình khác…
                            </p>
                            <p>
                            - Tài sản cố định vô hình (tài khoản 213): Quyền phát hành; bản quyền, bằng sáng chế; nhãn hiệu hàng hóa; phần mềm máy vi tính; giấy phép và giấy phép nhượng quyền; TSCĐ vô hình khác…
                            </p>
                            <p>
                                - Tài sản cố định thuê tài chính (tài khoản 212): Máy móc thiết bị; phương tiện vận tải, truyền dẫn; thiết bị, dụng cụ quản lý; cây lâu năm, súc vật làm việc và cho sản phẩm; TSCĐ hữu hình khác, tài sản cố định vô hình….Tài sản cố định thuê tài chính phải đảm bảo các điều kiện sau:
                            </p>
                            <p>
                                + Tài sản cố định thuê tài chính là những tài sản mà doanh nghiệp thuê của công ty cho thuê tài chính.
                            </p>
                            <p>
                                + Khi kết thúc thời hạn thuê, bên thuê được quyền lựa chọn mua lại tài sản thuê hoặc tiếp tục thuê theo các điều kiện đã thỏa thuận trong hợp đồng thuê tài chính.
                            </p>
                            <p>
                                + Tổng số tiền thuê một loại tài sản quy định tại hợp đồng thuê tài chính ít nhất phải tương đương với giá trị của tài sản đó tại thời điểm ký hợp đồng.
                            </p>
                            `
                    }
                ]
            },
            {
                id: 'item-3-5', label: '2.3. Sửa chữa, nâng cấp TSCĐ',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là toàn bộ chi phí thực tế phát sinh trong kỳ cho công việc sửa chữa, duy tu, bảo dưỡng TSCĐ của doanh nghiệp (gồm chi phí phải thanh toán cho bên ngoài và chi phí cho phần doanh nghiệp tự làm).
                            </p>                            
                            `
                    }
                ]
            },
            {
                id: 'item-3-6', label: '2.4. Bổ sung vốn lưu động dưới dạng hiện vật bằng vốn tự có',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là vốn đầu tư bổ sung nhằm làm tăng vốn vật tư hàng hóa (chính là phần tăng hàng tồn kho) của doanh nghiệp. Phần đầu tư bổ sung vốn lưu động này được tính bằng phần chênh lệch mang giá trị dương giữa hàng tồn kho cuối kỳ và đầu kỳ.
                            </p>
                            <p>
                                - Công thức tính:
                            </p>
                            <div style="margon-top: 1rem; margin-bottom: 1rem">
                                <table style="width:100%; text-align: center">
                                    <colgroup>
                                        <col style="width: 20%"></col>
                                        <col style="width: 15%"></col>
                                        <col style="width: 7.5%"></col>
                                        <col style="width: 15%"></col>
                                        <col style="width: 7.5%"></col>
                                        <col style="width: 15%"></col>
                                        <col style="width: 20%"></col>
                                    </colgroup>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>Thay đổi vốn lưu động trong kỳ</td>
                                        <td>=</td>
                                        <td>Trị giá hàng tồn kho cuối kỳ</td>
                                        <td>-</td>
                                        <td>Trị giá hàng tồn kho đầu kỳ</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </table>
                            </div>

                            <p>
                                Hàng tồn kho của doanh nghiệp là những tài sản được mua vào để sản xuất hoặc để bán trong kỳ sản xuất, kinh doanh, bao gồm: hàng mua đang đi trên đường (tài khoản 151); nguyên liệu, vật liệu (tài khoản 152); công cụ, dụng cụ (tài khoản 153); sản phẩm dở dang (tài khoản 154); thành phẩm (tài khoản 155);  hàng hoá (tài khoản 156); hàng gửi bán (tài khoản 157); hàng hóa kho bảo thuế (tài khoản 158); dự phòng giảm giá hàng tồn kho (tài khoản 2294).
                            </p>
                            <p>
                                <b>Bổ sung vốn lưu động dưới dạng hiện vật bằng vốn tự có của doanh nghiệp chỉ được tính khi thỏa mãn đồng thời cả hai điều kiện sau:</b>
                            </p>
                            <p>
                                - Chênh lệch cuối kỳ trừ đầu kỳ của trị giá hàng tồn kho mang giá trị dương.
                            </p>
                            <p>
                                - Chênh lệch cuối kỳ trừ đầu kỳ của trị giá hàng tồn kho được sử dụng bằng nguồn vốn tự có của doanh nghiệp.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-7', label: '2.5. Đầu tư khác',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Bao gồm vốn đầu tư của các dự án hỗ trợ kỹ thuật, vốn đầu tư cho các hoạt động nghiên cứu khoa học và phát triển đào tạo, bồi dưỡng phát triển nguồn nhân lực...của doanh nghiệp trong kỳ.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-8', label: '3. Các nguồn vốn đầu tư của doanh nghiệp',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            `
                    },
                ]
            },
            {
                id: 'item-3-9', label: '3.1. Ngân sách nhà nước',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là vốn đầu tư do ngân sách nhà nước (gồm: ngân sách nhà nước trung ương, ngân sách nhà nước địa phương) cấp cho doanh nghiệp để đầu tư theo quy định của pháp luật.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-10', label: '3.2. Trái phiếu Chính phủ',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Vốn đầu tư từ trái phiếu chính phủ trong doanh nghiệp là vốn đầu tư từ trái phiếu chính phủ cấp cho doanh nghiệp để đầu tư theo quy định của pháp luật.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-11', label: '3.3. Tín dụng đầu tư phát triển',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Vốn tín dụng đầu tư phát triển  trong doanh nghiệp là vốn đầu tư từ nguồn vốn tín dụng đầu tư phát triển của nhà nước và vốn ODA Chính phủ cho vay lại mà doanh nghiệp được vay theo đúng quy định của pháp luật.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-12', label: '3.4. Vốn vay',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là số tiền đầu tư mà doanh nghiệp đi vay từ các tổ chức tín dụng trong nước (không bao gồm các tổ chức tín dụng đầu tư của Nhà nước), vay các ngân hàng ở nước ngoài, vay các tổ chức quốc tế, vay các tổ chức và cá nhân dân cư khác ở trong nước và ở nước ngoài, vay của công ty mẹ hoặc công ty anh (em) để thực hiện vốn đầu tư của doanh nghiệp.
                            </p>
                            <p style="font-style: italic">
                                Lưu ý:
                            </p>
                            <p>
                                - Nếu doanh nghiệp có phát hành trái phiếu doanh nghiệp trong nước để đầu tư thì vốn đầu tư từ nguồn trái phiếu doanh nghiệp này sẽ tính vào nguồn vốn vay các tổ chức, cá nhân khác ở trong nước.
                            </p>
                            <p>
                                - Nếu doanh nghiệp có phát hành trái phiếu doanh nghiệp ra nước ngoài để đầu tư thì vốn đầu tư từ nguồn trái phiếu doanh nghiệp này sẽ tính vào nguồn vốn vay các tổ chức, cá nhân khác ở nước ngoài.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-13', label: '3.5. Vốn tự có',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là vốn được hình thành từ vốn tích lũy thuộc sở hữu của doanh nghiệp được hình thành từ thanh lý tài sản, từ nguồn vốn khấu hao TSCĐ, từ các quỹ, từ hình thức huy động vốn cổ phần, vốn góp liên doanh của các bên đối tác liên doanh được doanh nghiệp trích ra để thực hiện vốn đầu tư của doanh nghiệp.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-14', label: '3.6. Vốn huy động từ các nguồn khác',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là nguồn vốn đóng góp tự nguyện, cho, biếu, tặng của các tổ chức, cá nhân trong và ngoài nước, nguồn vốn huy động ngoài các nguồn nêu trên được sử dụng để thực hiện vốn đầu tư của doanh nghiệp.
                            </p>
                            <p>
                                <span><b>Quy ước: </b></span><span>Đối với doanh nghiệp xây dựng kinh doanh bất động sản xây nhà ở để bán cho dân: Toàn bộ số tiền do người dân nộp cho doanh nghiệp (theo tiến độ thi công công trình) sẽ ghi vào mục này.</span>
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-15', label: '4. Mục đích đầu tư của doanh nghiệp',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Mục đích đầu tư: Vốn đầu tư của doanh nghiệp chi ra nhằm mục đích nâng cao nâng cao năng lực sản xuất của doanh nghiệp. Doanh nghiệp hoạt động sản xuất kinh doanh ngành nào thì tính mục đích đầu tư cho ngành đó (theo mã ngành cấp 2,VSIC 2007).
                            </p>
                            <p>
                                Trường hợp doanh nghiệp hoạt động sản xuất kinh doanh đa ngành (một ngành chính và nhiều ngành khác): Vốn đầu tư của doanh nghiệp cho ngành nào thì tính cho ngành đó.
                            </p>
                            <p>
                                <span><b>Ví dụ: </b></span><span>Doanh nghiệp A hoạt động 2 ngành: Ngành chính là xây dựng, ngành khác là vận tải hàng hóa.Trong quý I/2017, doanh nghiệp có mua một máy trộn bê tông để tăng năng lực sản xuất của doanh nghiệp phục vụ việc đi thi công các công trình do doanh nghiệp nhận thầu trị giá 3 tỷ, một xe chở hàng phục vụ mục đích kinh doanh vận tải hàng hóa trị giá 2 tỷ. Như vậy, khi tính vốn đầu tư của doanh nghiệp quý I/2017 chia theo mục đích đầu tư sẽ xác định như sau:</span>
                            </p>
                            <p>
                                (1) Vốn đầu tư cho mục đích sản xuất ngành xây dựng (ngành 41,42,43): 3 tỷ.
                            </p>
                            <p>
                                (2) Vốn đầu tư cho mục đích ngành dịch vụ vận tải (ngành 49): 2 tỷ.
                            </p>
                            <p>
                                <span><b>Lưu ý: </b></span><span>Đối với doanh nghiệp có ngành hoạt động là ngành xây dựng thì vốn đầu tư của doanh nghiệp không được ghi giá trị của công trình doanh nghiệp nhận thi công xây dựng vì công trình đó không phải là công trình làm tăng năng lực của doanh nghiệp mà đó chỉ là sản phẩm sản xuất kinh doanh của doanh nghiệp.</span>
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-3-16', label: '5. Tỉnh/thành phố được doanh nghiệp thực hiện đầu tư',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Là vốn đầu tư của doanh nghiệp để tăng năng lực của doanh nghiệp được thực hiện trên địa điểm đứng chân của doanh nghiệp. Doanh nghiệp đứng chân tại tỉnh/thành phố nào thì vốn đầu tư được tính cho tỉnh/thành phố đó.
                            </p>
                            `
                    },
                ]
            },
        ],
    },
    // Vốn đầu tư của đơn vị sự nghiệp
    {
        id: 'section-4',
        title: 'Vốn đầu tư của đơn vị sự nghiệp',
        icon: ['fas', 'box'],
        description: 'Phiếu số 04/VĐTSN-N về thu thập thông tin vốn đầu tư thực hiện của đơn vị sự nghiệp thuộc ngành giáo dục và y tế. Áp dụng đối với đơn vị sự nghiệp công lập có đầu tư từ nguồn vốn tự có, vốn liên doanh, liên kết là chủ yếu và đơn vị sự nghiệp ngoài công lập.',
        lastModifiedDate: '2022-08-13',
        sections: [
            {
                id: 'item-4-1', label: '1. Đối tượng áp dụng',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Áp dụng đối với chủ đầu tư là đơn vị sự nghiệp công lập thuộc ngành y tế, ngành giáo dục có đầu tư từ nguồn vốn tự có, vốn liên doanh, liên kết; đơn vị sự nghiệp ngoài công lập thuộc ngành y tế, giáo dục.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-4-2', label: '2. Loại hình của đơn vị sự nghiệp',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                - Đơn vị sự nghiệp công lập là tổ chức do cơ quan có thẩm quyền của Nhà nước, tổ chức chính trị, tổ chức chính trị - xã hội thành lập theo quy định của pháp luật, có tư cách pháp nhân, cung cấp dịch vụ công, phục vụ quản lý nhà nước. Đơn vị sự nghiệp công lập gồm: (1) đơn vị sự nghiệp công lập được giao quyền tự 19 chủ hoàn toàn về thực hiện nhiệm vụ, tài chính, tổ chức bộ máy, nhân sự; (2) đơn vị sự nghiệp công lập chưa được giao quyền tự chủ hoàn toàn về thực hiện nhiệm vụ, tài chính, tổ chức bộ máy, nhân sự.
                            </p>
                            <p>
                                - Đơn vị sự nghiệp ngoài công lập: Là đơn vị do tư nhân trong nước, tư nhân nước ngoài hoặc tư nhân trong nước liên doanh với tư nhân nước ngoài đăng ký thành lập nhưng không hoạt động theo Luật doanh nghiệp, tự lo vốn và kinh phí hoạt động, lấy thu bù chi trong các lĩnh vực y tế, giáo dục đào tạo, khoa học công nghệ, văn hóa thể thao.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-4-3', label: '3. Thu thập thông tin về vốn đầu tư thực hiện của đơn vị sự nghiệp',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Vốn đầu tư thực hiện của đơn vị sự nghiệp quy định theo nội hàm chung của vốn đầu tư thực hiện toàn xã hội và được phân tổ theo nguồn vốn đầu tư, khoản mục đầu tư, ngành kinh tế và tỉnh/thành phố trực thuộc Trung ương.
                            </p>
                            <p style="font-style: italic">
                                <b>Quy định tài sản cố định trong đơn vị sự nghiệp</b>
                            </p>
                            <p>
                                - Tài sản cố định của đơn vị sự nghiệp công lập: Là những tài sản có hình thái vật chất, có kết cấu độc lập hoặc là một hệ thống gồm nhiều bộ phận riêng lẻ liên kết với nhau để cùng thực hiện một hay một số chức năng nhất định, thoả mãn đồng thời cả 2 tiêu chuẩn dưới đây: (1) có thời gian sử dụng từ 01 năm trở lên; (2) có nguyên giá từ 10 triệu đồng trở lên (theo Thông tư số 162/2014-BTC ngày 06 tháng 11 năm 2014 của Bộ tài chính quy định chế độ quản lý, tính hao mòn tài sản cố định trong các cơ quan nhà nước, đơn vị sự nghiệp công lập và các tổ chức có sử dụng ngân sách nhà nước).
                            </p>
                            <p>
                                - Tài sản cố định của đơn vị sự nghiệp ngoài công lập: Là những tài sản có kết cấu độc lập, hoặc nhiều bộ phận tài sản riêng lẻ liên kết với nhau thành một hệ thống để cùng thực hiện một hay một số chức năng nhất định, nếu thiếu bất kỳ một bộ phận nào trong đó thì cả hệ thống không thể hoạt động được, nếu thoả mãn đồng thời cả bốn tiêu chuẩn dưới đây thì được coi là tài sản cố định: (1) chắc chắn thu được lợi ích kinh tế trong tương lai từ việc sử dụng tài sản đó; (2) nguyên giá tài sản phải được xác định một cách tin cậy; (3) có thời gian sử dụng từ 1 năm trở lên; (4) có giá trị theo quy định hiện hành từ 10 triệu đồng trở lên (theo Thông tư 140/2007/TT-BTC ngày 30 tháng 11 năm 2007 của Bộ Tài chính hướng dẫn kế toán áp dụng cho cơ sở ngoài công lập).
                            </p>
                            <p>
                                - Giá trị sửa chữa, nâng cấp TSCĐ trong kỳ của đơn vị sự nghiệp tối thiểu phải từ 01 triệu đồng trở lên.
                            </p>
                            `
                    },
                ]
            },
        ],
    },
    // Đầu tư của xã/phường/thị trấn
    {
        id: 'section-5',
        title: 'Đầu tư của xã/phường/thị trấn',
        icon: ['fas', 'box'],
        description: 'Phiếu số 05/VĐTXP-N về thu thập thông tin vốn đầu tư thực hiện của xã/phường/thị trấn. Áp dụng cho UBND xã/phường/thị trấn quản lý xây dựng các công trình mang tính xã hội hóa sử dụng vốn của các tổ chức, cá nhân đóng góp.',
        lastModifiedDate: '2022-08-13',
        sections: [
            {
                id: 'item-5-1', label: '1. Đối tượng áp dụng',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Áp dụng cho UBND xã/phường/thị trấn có cấp phép xây dựng các công trình mang tính xã hội hóa sử dụng vốn của các tổ chức, cá nhân đóng góp.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-5-2', label: '2. Thu thập thông tin về vốn đầu tư thực hiện của xã/phường/thị trấn',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Vốn đầu tư thực hiện của xã/phường/thị trấn quy định theo nội hàm chung của chỉ tiêu vốn đầu tư thực hiện toàn xã hội và được phân tổ theo nguồn vốn đầu tư, khoản mục đầu tư, ngành kinh tế và tình/thành phố trực thuộc Trung ương.
                            </p>
                            `
                    },
                ]
            },
        ],
    },
    // Đầu tư của Sở tài chính
    {
        id: 'section-6',
        title: 'Đầu tư của Sở tài chính',
        icon: ['fas', 'box'],
        description: 'Phiếu số 06/VĐTSTC-N về thu thập thông tin vốn đầu tư thực hiện của sở tài chính. Áp dụng cho Sở Tài chính tổng hợp chi mua sắm, sữa chữa tài sản từ nguồn kinh phí thường xuyên của các đơn vị sử dụng ngân sách Nhà nước trên địa bàn tỉnh, thành phố trực thuộc Trung ương.',
        lastModifiedDate: '2022-08-13',
        sections: [
            {
                id: 'item-6-1', label: '1. Đối tượng áp dụng',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Áp dụng cho Sở Tài chính tỉnh, thành phố trực thuộc Trung ương.
                            </p>
                            <p>
                                Phiếu này nhằm thu thập thông tin về chi mua hàng hóa vật tư dự trữ nhà nước; chi cho mua sắm, sửa chữa tài sản phục vụ công tác chuyên môn, duy tu bảo dưỡng các công trình hạ tầng từ nguồn kinh phí thường xuyên của các đơn vị sử dụng ngân sách nhà nước trên địa bàn tỉnh, thành phố trực thuộc trung ương trong năm báo cáo.
                            </p>
                            <p>
                                Qui định: Chỉ thu thập thông tin của các đơn vị sử dụng ngân sách nhà nước trên địa bàn tỉnh/thành phố trực thuộc trung ương không có tính chất kinh doanh (không phải là đơn vị kinh tế) như các đơn vị hành chính, đơn vị sự nghiệp, các tổ chức chính trị, chính trị xã hội, xã hội - nghề nghiệp....
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-6-2', label: '2. Thu thập về vốn đầu tư thực hiện của Sở tài chính',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Vốn đầu tư thực hiện của Sở tài chính là nguồn vốn sử dụng nhằm phục vụ chi mua sắm, sửa chữa tài sản từ nguồn kinh phí thường xuyên.
                            </p>
                            `
                    },
                ]
            },
            {
                id: 'item-6-3', label: '2.1. Phân loại chi theo nội dung kinh tế',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Kê khai các khoản chi theo danh mục mã số nội dung kinh tế thuộc phụ lục số 3 kèm theo quyết định số 33/2008/QĐ-BTC ngày 2/6/2008 của Bộ trưởng Bộ Tài chính về việc ban hành hệ thống mục lục ngân sách nhà nước và các Thông tư số 144/2011/TT-BTC ngày 21/10/2011, Thông tư số 110/2012/TT-BTC ngày 17/12/2012, Thông tư số 217/2012/TT-BTC ngày 17/12/2012, Thông tư số 97/2013/TT-BTC ngày 23/7/2013, Thông tư số 147/2013/TT-BTC ngày 23/10/2013 của Bộ Tài chính về sửa đổi, bổ sung và hướng dẫn mục lục ngân sách nhà nước ban hành theo Quyết định số 33/2008/QĐ-BTC.
                            </p>
                            <p>
                                Từ năm 2019 việc thu thập số liệu của năm 2018, kê khai các khoản chi theo danh mục mã số nội dung kinh tế thuộc phụ lục số 3 kèm theo thông tư số 324/2016/TT-BTC ngày 21/12/2016 của Bộ trưởng Bộ Tài chính về việc ban hành hệ thống mục lục ngân sách nhà nước.
                            </p>
                            <p style="font-style: italic">
                                <b>(1) Chi sửa chữa tài sản phục vụ công tác chuyên môn và các công trình cơ sở hạ tầng (mã 6900 và 9100 trong phụ lục số 3): Là tổng số chi trong năm báo cáo,  gồm:</b>
                            </p>
                            <p>+ Mô tô</p>
                            <p>+ Ô tô con, ô tô tải</p>
                            <p>+ Xe chuyên dùng</p>
                            <p>+ Tàu, thuyền</p>
                            <p>+ Trang thiết bị kỹ thuật chuyên dụng</p>
                            <p>+ Điều hòa nhiệt độ</p>
                            <p>+ Nhà cửa</p>
                            <p>+ Thiết bị phòng cháy, chữa cháy</p>
                            <p>+ Thiết bị tin học</p>
                            <p>+ Máy photocopy</p>
                            <p>+ Máy fax</p>
                            <p>+ Máy phát điện</p>
                            <p>+ Máy bơm nước</p>
                            <p>+ Bảo trì và hoàn thiện phần mềm máy tính</p>
                            <p>+ Công trình văn hóa, công viên, thể thao.</p>
                            <p>+ Đường điện, cấp thoát nước.</p>
                            <p>+ Đường xá, cầu cống, bến cảng, sân bay</p>
                            <p>+ Đê điều, hồ đập, kênh mương.</p>
                            <p>+ Các tài sản và công trình hạ tầng cơ sở khác.</p>
                            <p>
                                <span style="font-style: italic"><b>(2) Chi mua hàng hóa, vật tư dự trữ Nhà nước, hàng hóa vật tư dự trữ Nhà nước chuyên ngành (mã 8700 và 8800 trong phụ lục số 3) trong năm báo cáo: </b></span><span>Là giá trị chênh lệch cuối kỳ (31/12) và đầu kỳ (01/01) của hàng hóa, vật tư dự trữ trong kho của năm báo cáo, gồm:</span>
                            </p>
                            <p>+ Lương thực</p>
                            <p>+ Nhiên liệu</p>
                            <p>+ Vật tư kỹ thuật</p>
                            <p>+ Trang thiết bị kỹ thuật</p>
                            <p>+ Khác</p>
                            <p>
                                <b>- Ví dụ:</b>
                            </p>
                            <p>+ Thời điểm 01/01/2017: Dự trữ gạo của quốc gia trong kho có giá trị là 1000 tỷ đồng.</p>
                            <p>+ Trong năm 2017:</p>
                            <p>++ Chi mua bổ sung dự trữ gạo là 1500 tỷ đồng.</p>
                            <p>++ Xuất kho cứu trợ, cứu đói giáp hạt, hỗ trợ cho học sinh vùng khó khăn, hỗ trợ dân di cư tự do…:  trị giá là 500 tỷ đồng.</p>
                            <p>+ Đến thời điểm 31/12/2017, dự trữ gạo của quốc gia là:</p>
                            <p style="text-align: center">1000+1500 -500 = 2000 (tỷ đồng)</p>
                            <p> + Như vậy, giá trị chi mua gạo dự trữ nhà nước thực hiện năm 2017 là:</p>
                            <p style="text-align: center">2000 – 1000 = 1000 (tỷ đồng)</p>
                            <p style="font-style: italic">
                                <b>(3) Chi mua, đầu tư tài sản vô hình năm báo cáo (mã 9000 phụ lục 3): Là tổng số chi trong năm báo cáo, gồm:</b>
                            </p>
                            <p>+ Mua bằng sáng chế</p>
                            <p>+ Mua bản quyền nhãn hiệu thương mại</p>
                            <p>+ Mua phần mềm máy tính</p>
                            <p>+ Đầu tư, xây dựng phần mềm máy tính</p>
                            <p>+ Khác</p>
                            <p style="font-style: italic">
                                <b>(4) Chi mua sắm tài sản dùng cho công tác chuyên môn năm báo cáo (mã 9050 phụ lục 3): Là tổng số chi trong năm báo cáo, gồm:</b>
                            </p>
                            <p>+ Mô tô</p>
                            <p>+ Ô tô con, ô tô tải</p>
                            <p>+ Xe chuyên dùng</p>
                            <p>+ Tàu, thuyền</p>
                            <p>+ Trang thiết bị kỹ thuật chuyên dụng</p>
                            <p>+ Điều hòa nhiệt độ</p>
                            <p>+ Nhà cửa</p>
                            <p>+ Thiết bị phòng cháy, chữa cháy</p>
                            <p>+ Thiết bị tin học</p>
                            <p>+ Máy photocopy</p>
                            <p>+ Máy fax</p>
                            <p>+ Máy phát điện</p>
                            <p>+ Máy bơm nước</p>
                            <p>+ Tài sản khác.</p>
                            `
                    },
                ]
            },
            {
                id: 'item-6-4', label: '2.2. Phân loại chi theo ngành kinh tế',
                elements: [
                    {
                        type: 'paragraph',
                        html:
                            `
                            <p>
                                Kê khai các khoản chi theo danh mục mã số ngành kinh tế phụ lục số 2 kèm theo quyết định số 33/2008/QĐ-BTC ngày 2/6/2008 của Bộ trưởng Bộ Tài chính về việc ban hành hệ thống mục lục ngân sách nhà nước.
                            </p>
                            <p>
                                Từ năm 2019 việc thu thập số liệu của năm 2018, kê khai các khoản chi theo danh mục mã số nội dung kinh tế thuộc phụ lục số 2 kèm theo thông tư số 324/2016/TT-BTC ngày 21/12/2016 của Bộ trưởng Bộ Tài chính về việc ban hành hệ thống mục lục ngân sách nhà nước.
                            </p>
                            `
                    },
                ]
            },
        ],
    },
    // {
    //     id: 'section-3',
    //     title: 'Điều tra vốn đầu tư tháng',
    //     icon: ['fas', 'box'],
    //     description: 'Phiếu này nhằm thu thập thông tin về vốn đầu tư thực hiện hàng quý của các loại hình doanh nghiệp nhà nước, doanh nghiệp ngoài nhà nước, doanh nghiệp có vốn đầu tư trực tiếp nước ngoài, hợp tác xã/liên hợp tác xã đang trong quá trình đầu tư chuẩn bị cho sản xuất kinh doanh hoặc đang hoạt động sản xuất kinh doanh được chọn vào mẫu điều tra.',
    //     lastModifiedDate: '2022-03-07',
    //     sections: [
    //         // article headline
    //         // {
    //         //     id: 'item-1-1', label: 'Điều tra vốn đầu tư quý',
    //         //     elements: [
    //         //         {
    //         //             type: 'paragraph',
    //         //             html:
    //         //                 `
    //         //                 <p style="font-weight: xxx-large">
    //         //                     <strong>
    //         //                         Điều tra vốn đầu tư quý
    //         //                     </strong>
    //         //                 </p]>
    //         //                 `
    //         //         }
    //         //     ]
    //         // },
    //         {
    //             id: 'item-1-1', label: '1. Phiếu số 01',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         <p>
    //                             Lập danh sách địa bàn 
    //                         </p>
    //                         `
    //                 },
    //             ]
    //         },
    //         {
    //             id: 'item-1-2', label: '2. Phiếu số 02',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         <p>
    //                             Vốn đầu tư hộ
    //                         </p>
    //                         `
    //                 },
    //             ]
    //         },
    //         {
    //             id: 'item-1-3', label: '3. Phiếu số 03',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         <p>
    //                             Vốn đầu tư trang trại
    //                         </p>
    //                         `
    //                 },
    //             ]
    //         },
    //         {
    //             id: 'item-1-4', label: '4. Phiếu số 04',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         `
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'item-1-5', label: '4.1 Đối tượng áp dụng',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         <p>
    //                             Phiếu này nhằm thu thập thông tin về vốn đầu tư thực hiện hàng quý của các loại hình doanh nghiệp nhà nước, doanh nghiệp ngoài nhà nước, doanh nghiệp có vốn đầu tư trực tiếp nước ngoài, hợp tác xã/liên hợp tác xã đang trong quá trình đầu tư chuẩn bị cho sản xuất kinh doanh hoặc đang hoạt động sản xuất kinh doanh được chọn vào mẫu điều tra.
    //                         </p>
    //                         `
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'item-1-6', label: '4.2 Nội dung phiếu điều tra',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         `
    //                 },
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         <strong>
    //                             4.2.1 Mẫu phiếu
    //                         </strong>
    //                         <p>
    //                             Gồm 2 sheet
    //                         </p>
    //                         <ul>
    //                             <li>
    //                                 Sheet 1: Nguồn vốn và khoản mục đầu tư có phát sinh thực hiện
    //                             </li>
    //                             <li>
    //                                 Sheet 2: Danh mục Công trình dự án trọng điểm
    //                             </li>
    //                         </ul>
    //                         <br/>
    //                         <img src="https://aodigy-6c-dev-ed--c.documentforce.com/servlet/servlet.ImageServer?id=0155g000000dXjT&amp;oid=00D5g000004jqkV&amp;lastMod=1647186022000">
    //                         `
    //                 },
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         <strong>
    //                             4.2.2 Nội dung phiếu
    //                         </strong>
    //                         <ul>
    //                             <li>
    //                                 Nhằm trả lời cho câu hỏi: DN có phát sinh đầu tư trong quý hay không? Nếu có, đầu tư vào khoản mục nào, dùng nguồn vốn nào để thực hiện đầu tư và đầu tư vào ngành nào, ở tỉnh/thành nào?
    //                             </li>
    //                             <li>
    //                                 Cụ thể, phiếu bao gồm 4 phần:
    //                                 <ul>
    //                                     <li>Phần A: Nguồn vốn dùng để thực hiện đầu tư</li>
    //                                     <li>Phần B: Khoản mục có phát sinh đầu tư</li>
    //                                     <li>Phần C: Mục đích đầu tư</li>
    //                                     <li>Phần D: Tỉnh/thành phố có phát sinh đầu tư</li>
    //                                 </ul>
    //                             </li>
    //                         </ul>
    //                         `
    //                 },
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         <strong>
    //                             a. Phần A - Nguồn vốn
    //                         </strong>
    //                         <ul>
    //                             <li>
    //                                 Ngân sách nhà nước: Là vốn đầu tư do ngân sách nhà nước (gồm: ngân sách nhà nước Trung ương, ngân sách nhà nước địa phương) cấp cho doanh nghiệp để đầu tư theo quy định của pháp luật.
    //                             </li>
    //                             <li>
    //                                 Trái phiếu Chính phủ
    //                             </li>
    //                         </ul>
    //                         <p>
    //                             Vốn đầu tư từ trái phiếu Chính phủ trong doanh nghiệp là vốn đầu tư từ trái phiếu
    //                         </p>
    //                         <p>
    //                             Chính phủ cấp cho doanh nghiệp để đầu tư theo quy định của pháp luật.
    //                         </p>
    //                         <ul>
    //                             <li>
    //                                 Tín dụng đầu tư phát triển
    //                             </li>
    //                         </ul>
    //                         <p>
    //                             Vốn tín dụng đầu tư phát triển trong doanh nghiệp là vốn đầu tư từ nguồn vốn tín dụng đầu tư phát triển của nhà nước và vốn ODA Chính phủ cho vay lại mà doanh nghiệp được vay theo đúng quy định của pháp luật.
    //                         </p>
    //                         <ul>
    //                             <li>
    //                                 Vốn vay: Là số tiền đầu tư mà doanh nghiệp đi vay từ các tổ chức tín dụng trong nước (không bao gồm các tổ chức tín dụng đầu tư của Nhà nước), vay các ngân hàng ở nước ngoài, vay các tổ chức quốc tế, vay các tổ chức và cá nhân khác ở trong nước và ở nước ngoài, vay của công ty mẹ hoặc công ty anh (em) để thực hiện vốn đầu tư của doanh nghiệp.
    //                             </li>
    //                             <li>
    //                                 Vốn tự có: Là vốn được hình thành từ vốn tích lũy thuộc sở hữu của doanh nghiệp được hình thành từ thanh lý tài sản, từ nguồn vốn khấu hao TSCĐ, từ các quỹ, từ hình thức huy động vốn cổ phần, vốn góp liên doanh của các bên đối tác liên doanh được doanh nghiệp trích ra để thực hiện vốn đầu tư của doanh nghiệp.
    //                             </li>
    //                             <li>
    //                                 Vốn huy động từ các nguồn khác: Là nguồn vốn đóng góp tự nguyện, cho, biếu, tặng của các tổ chức, cá nhân trong và ngoài nước, nguồn vốn huy động ngoài các nguồn nêu trên được sử dụng để thực hiện vốn đầu tư của doanh nghiệp.
    //                             </li>
    //                         </ul>
    //                         `
    //                 },
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         <strong>
    //                             b. Phần B - Khoản mục đầu tư
    //                         </strong>
    //                         <ul>
    //                             <li>
    //                                 Xây dựng cơ bản: Toàn bộ vốn bỏ ra để cho việc khảo sát quy hoạch xây dựng công trình, chuẩn bị đầu tư, thiết kế; chi xây dựng, mua sắm và lắp đặt thiết bị; các chi khác được ghi trong tổng dự toán (bao gồm cả tiền chuyển quyền sử dụng đất). Vốn đầu tư xây dựng cơ bản bao gồm: Xây dựng và lắp đặt (vốn xây lắp); Máy móc, thiết bị (vốn thiết bị) và vốn đầu tư xây dựng cơ bản khác.
    //                             </li>
    //                             <li>
    //                                 Mua sắm tài sản cố định (TSCĐ) dùng cho sản xuất không qua xây dựng cơ bản: Là toàn bộ vốn đầu tư mua TSCĐ bổ sung thêm trong kỳ và không liên quan đến hoạt động xây dựng cơ bản.
    //                             </li>
    //                             <li>
    //                                 Sửa chữa, nâng cấp TSCĐ: Là toàn bộ chi phí thực tế phát sinh trong kỳ cho công việc sửa chữa, duy tu, bảo dưỡng TSCĐ của doanh nghiệp (gồm chi phí phải thanh toán cho bên ngoài và chi phí cho phần doanh nghiệp tự làm).
    //                             </li>
    //                             <li>
    //                                 Bổ sung vốn lưu động dưới dạng hiện vật bằng vốn tự có: Là vốn đầu tư bổ sung nhằm làm tăng vốn vật tư hàng hóa (chính là phần tăng hàng tồn kho) của doanh nghiệp. Phần đầu tư bổ sung vốn lưu động này được tính bằng phần chênh lệch mang giá trị dương giữa hàng tồn kho cuối kỳ và đầu kỳ.
    //                             </li>
    //                             <li>
    //                                 Đầu tư khác: nghiên cứu khoa học…
    //                             </li>
    //                         </ul>
    //                         `
    //                 },
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         <strong>
    //                             c. Phần C - Vốn đầu tư chia theo mục đích đầu tư
    //                         </strong>
    //                         <p>
    //                             Mục đích đầu tư: Vốn đầu tư của doanh nghiệp chi ra nhằm mục đích nâng cao năng lực sản xuất của doanh nghiệp. Doanh nghiệp hoạt động sản xuất kinh doanh ngành nào thì tính mục đích đầu tư cho ngành đó (theo mã ngành cấp 2 VSIC 2007).
    //                         </p>
    //                         `
    //                 },
    //                 {
    //                     type: 'paragraph',
    //                     html:
    //                         `
    //                         <strong>
    //                             d. Phần D - Vốn đầu tư chia theo tỉnh/thành phố trực thuộc Trung ương
    //                         </strong>
    //                         <p>
    //                             Là vốn đầu tư của doanh nghiệp để tăng năng lực của doanh nghiệp được thực hiện trên địa điểm đứng chân của doanh nghiệp. Doanh nghiệp đứng chân tại tỉnh/thành phố nào thì vốn đầu tư được tính cho tỉnh/thành phố đó.
    //                         </p>
    //                         `
    //                 },
    //             ]
    //         },
    //     ],
    // },
    // {
    //     id: 'section-2',
    //     title: 'Thống kê doanh nghiệp 2',
    //     icon: ['fas', 'arrow-down'],
    //     description: 'Naming variables, classes and methods can be tedious but we make sure that our naming conventions address the meaning of the feature.',
    //     lastModifiedDate: '2021-10-25',
    //     sections: [
    //         {id: 'item-2-1', label: 'Class Names',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         <ol type="1">
    //                             <li>Naming our classes should be in <strong>Pascal Case</strong>.</li>
    //                             <li>It should also begin with an <strong>Upper case</strong> character.</li>
    //                             <li>Special characters should be avoided such as <strong>Dash -</strong> or <strong>Underscore _</strong>.</li>
    //                             <li>The maximum length is <strong>40 characters</strong>.</li>
    //                         </ol>
    //                     `
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'success',
    //                     label: 'Correct',
    //                     html: `
    //                         <br/>
    //                         <ul style="list-style-type:none;">
    //                             <li>AccountController</li>
    //                             <li>AccountControllerTest</li>
    //                             <li>TestDataFactory</li>
    //                             <li>ContactUpdateBatch</li>
    //                         </ul>
    //                     `
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'danger',
    //                     label: 'Incorrect',
    //                     html: `
    //                         <br/>
    //                         <ul style="list-style-type:none;">
    //                             <li>Account_Controller</li>
    //                             <li>Account_Controller_Test</li>
    //                             <li>AccountController_Test</li>
    //                             <li>accountController</li>
    //                             <li>Test_Data_Factory</li>
    //                             <li>TestData_Factory</li>
    //                             <li>Testdatafactory</li>
    //                             <li>Contact_Update_Batch</li>
    //                             <li>ContactUpdate_Batch</li>
    //                             <li>contactupdatebatch</li>
    //                         </ul>
    //                     `
    //                 }
    //             ]
    //         },
    //         {id: 'item-2-2', label: 'Class Methods',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         <ol type="1">
    //                             <li>Naming our class methods should be in <strong>Camel Case</strong>.</li>
    //                             <li>It should also begin with a <strong>Lower case</strong> character.</li>
    //                             <li>Special characters should be avoided such as <strong>Dash -</strong> or <strong>Underscore _</strong>.</li>
    //                         </ol>
    //                     `
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'success',
    //                     label: 'Correct',
    //                     html: `
    //                         <br/>
    //                         <ul style="list-style-type:none;">
    //                             <li>getAllAccounts</li>
    //                             <li>findAllAccountsWithActivities</li>
    //                         </ul>
    //                     `
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'danger',
    //                     label: 'Incorrect',
    //                     html: `
    //                         <br/>
    //                         <ul style="list-style-type:none;">
    //                             <li>get_All_Accounts</li>
    //                             <li>get_AllAccounts</li>
    //                             <li>GetAllAccounts</li>
    //                             <li>GETALLACCOUNTS</li>
    //                             <li>getallaccounts</li>
    //                             <li>FindAllAccountsWithActivities</li>
    //                             <li>find-All-Accounts-With-Activities</li>
    //                             <li>find-all-accounts-with-activities</li>
    //                             <li>findAllAccountsW/Activities</li>
    //                         </ul>
    //                     `
    //                 }
    //             ]
    //         },
    //         {id: 'item-2-3', label: 'Mutable Variables (Non-Final)',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         <ol type="1">
    //                             <li>Naming our mutable variables should be in <strong>Camel Case</strong>.</li>
    //                             <li>It should also begin with a <strong>Lower case</strong> character.</li>
    //                             <li>Special characters should be avoided such as <strong>Dash -</strong> or <strong>Underscore _</strong>.</li>
    //                             <li>Avoid single letter variable names.</li>
    //                         </ol>
    //                     `
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'success',
    //                     label: 'Correct',
    //                     html: `
    //                         <br/>
    //                         <ul style="list-style-type:none;">
    //                             <li>String accountName = 'Lorem Ipsum';</li>
    //                             <li>Integer numberWhichWillBeIncremented = 1;</li>
    //                             <li>Boolean isActivated = true;</li>
    //                             <li>for (List<Account> account : accounts) {}</li>
    //                             <li>for (List<Account> acct : accounts) {}</li>
    //                         </ul>
    //                     `
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'danger',
    //                     label: 'Incorrect',
    //                     html: `
    //                         <br/>
    //                         <ul style="list-style-type:none;">
    //                             <li>String AccountName = 'Lorem Ipsum';</li>
    //                             <li>String ACCOUNTNAME = 'Lorem Ipsum';</li>
    //                             <li>String ACCOUNT_NAME = 'Lorem Ipsum';</li>
    //                             <li>String a = 'Lorem Ipsum';</li>
    //                             <li>Integer NumberWhichWillBeIncremented = 1;</li>
    //                             <li>Integer number_Which_Will_Be_Incremented = 1;</li>
    //                             <li>Integer n = 1;</li>
    //                             <li>Boolean is_Activated = true;</li>
    //                             <li>Boolean i = true;</li>
    //                         </ul>
    //                     `
    //                 }
    //             ]
    //         },
    //         {id: 'item-2-4', label: 'Immutable Variables (Final)',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         <ol type="1">
    //                             <li>Naming our mutable variables should be in <strong>Snake Case</strong>.</li>
    //                             <li>It should also <strong>All Upper Case</strong> character.</li>
    //                             <li>Avoid single letter variable names.</li>
    //                         </ol>
    //                     `
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'success',
    //                     label: 'Correct',
    //                     html: `
    //                         <br/>
    //                         <ul style="list-style-type:none;">
    //                             <li>final String PAGE_LONG_DESCRIPTION = 'Lorem Ipsum';</li>
    //                             <li>final Integer BATCH_LIMIT = 50;</li>
    //                             <li>final Boolean ENABLE_LOG_EXCEPTION = true;</li>
    //                         </ul>
    //                     `
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'danger',
    //                     label: 'Incorrect',
    //                     html: `
    //                         <br/>
    //                         <ul style="list-style-type:none;">
    //                             <li>final String PAGELONGDESCRIPTION = 'Lorem Ipsum';</li>
    //                             <li>final String lagelongdescription = 'Lorem Ipsum';</li>
    //                             <li>final Integer batchLimit = 50;</li>
    //                             <li>final Integer BatchLimit = 50;</li>
    //                             <li>final Boolean ENABLELOG_EXCEPTION = true;</li>
    //                             <li>final Boolean enable_log_exce[topm] = true;</li>
    //                             <li>final A = 1;</li>
    //                             <li>final B = true;</li>
    //                         </ul>
    //                     `
    //                 }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     id: 'section-3',
    //     title: 'Thống kê doanh nghiệp 3',
    //     icon: ['fas', 'box'],
    //     description: 'The trigger handler interface we use to maximise trigger performance and provide uniformity across trigger patterns.',
    //     lastModifiedDate: '2021-10-26',
    //     sections: [
    //         {id: 'item-3-1', label: 'Which Trigger Handler Interface?',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         We will use the following Trigger interface for our projects:<br/>
    //                         <a href="https://github.com/kevinohara80/sfdc-trigger-framework/tree/master/src/classes" target="_blank" rel="noopener noreferrer">sfdc-trigger-framework</a>
    //                     `
    //                 }
    //             ]
    //         },
    //         {id: 'item-3-2', label: 'Naming Convention',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         If the Object is called <strong>Example</strong>, we will use the class name <strong>ExampleTriggerHandler</strong>.
    //                     `
    //                 }
    //             ]
    //         },
    //         {id: 'item-3-3', label: 'ExampleTriggerHandler',
    //             elements: [
    //                 {
    //                     type: 'code-block',
    //                     gist: '84a107182a0478e4273b80b3c1f73a8b'
    //                 }
    //             ]
    //         },
    //         {id: 'item-3-4', label: 'Accessing Lists',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         Using Lists from an Account Trigger Handler
    //                     `
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: '0b87c06897c1e3dfdbed8a37d6bfe41a'
    //                 }
    //             ]
    //         },
    //         {id: 'item-3-4', label: 'Accessing Maps',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         Using Maps from an Account Trigger Handler
    //                     `
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: 'ccc37a369573cdea163e6644cbf7e14d'
    //                 }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     id: 'section-4',
    //     title: 'Thống kê doanh nghiệp 4',
    //     icon: ['fas', 'cogs'],
    //     description: 'We always want our triggers to be lean and minimalistic. Learn how we declare our triggers in coordination with our Trigger Handler Interface.',
    //     lastModifiedDate: '2021-10-26',
    //     sections: [
    //         {id: 'item-4-1', label: 'Naming Convention',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         If the Object is called <strong>Example</strong>, we will use the class name <strong>ExampleTrigger</strong>.
    //                     `
    //                 }
    //             ]
    //         },
    //         {id: 'item-4-2', label: 'ExampleTrigger',
    //             elements: [
    //                 {
    //                     type: 'code-block',
    //                     gist: 'dbd648fdc78fb479f50af762741af4e8'
    //                 }
    //             ]
    //         },
    //         {id: 'item-4-3', label: 'Using AccountTriggerHandler with AccountTrigger',
    //             elements: [
    //                 {
    //                     type: 'code-block',
    //                     gist: '2663491ccd689d417b41f135f204c446'
    //                 }
    //             ]
    //         },
    //         {id: 'item-4-4', label: 'Custom Metadata Toggle On/Off',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         TBD
    //                     `
    //                 }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     id: 'section-5',
    //     title: 'Thống kê doanh nghiệp 5',
    //     icon: ['fas', 'tools'],
    //     description: 'The SOQL interface we use for dynamically querying Standard and Custom Salesforce Objects.',
    //     lastModifiedDate: '2021-10-26',
    //     sections: [
    //         {id: 'item-5-1', label: 'Which Query Builder Interface?',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         We will use the following Query Builder interface for our projects:<br/>
    //                         <a href="https://github.com/4an70m/apex-query-builder" target="_blank" rel="noopener noreferrer">apex-query-builder</a>
    //                     `
    //                 }
    //             ]
    //         },
    //         {id: 'item-5-2', label: 'Link to Query Builder classes',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         We will use the following Query Builder interface for our projects:<br/>
    //                         <a href="https://github.com/4an70m/apex-query-builder/tree/master/src/classes" target="_blank" rel="noopener noreferrer">apex-query-builder classes</a>
    //                     `
    //                 }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     id: 'section-6',
    //     title: 'Thống kê doanh nghiệp 6',
    //     icon: ['fas', 'laptop-code'],
    //     description: 'Learn about the security patterns we use to ensure we are adhering to the Sharing Model and Field Level Security.',
    //     lastModifiedDate: '2021-10-26',
    //     sections: [
    //         {id: 'item-6-1', label: 'Enforcing Row Level Security',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         To enforce row level security on objects within Apex classes, we first need to know if the Apex class is querying any Objects.<br/>
    //                         If our Apex Class is performing a query, Row level security should always be enforced.<br/><br/>    
    //                         Apex classes such as utility classes which do not perform queries do not need row level security.
    //                     `
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'danger',
    //                     label: 'Incorrect',
    //                     html: `
    //                         The example below does not enforce row level security
    //                     `
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: 'e07a22c60eb7145313ebc204a7f69218'
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'success',
    //                     label: 'With Sharing Rules',
    //                     html: `
    //                         The example below implements a class with enabled sharing rules
    //                     `
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: 'f01fb0ac224f9dd48c14cd89eea6ba59'
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'success',
    //                     label: 'Without Sharing Rules',
    //                     html: `
    //                         The example below implements a class with disabled sharing rules
    //                     `
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: '1aadea49a843aad87d762280039f47fd'
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'success',
    //                     label: 'Apex Classes without SOQL Queries do not need Sharing to be defined',
    //                     html: `
    //                         The example below implements a class without sharing enforcement but it is ok as it does not have any SOQL queries which need to be governed by sharing rules
    //                     `
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: '4b39b0d32b041bcb495eadd351acc947'
    //                 }
    //             ]
    //         },
    //         {id: 'item-6-2', label: 'Enforcing Object and Field Permissions',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         By default, apex doesn't enforce object or field-level permissions. Salesforce offers 3 different ways to verify access and how to ensure your Apex security requirements are met.
    //                         <br/>
    //                         <ol type="1">
    //                             <li><strong>WITH SECURITY_ENFORCED</strong> - provides security as a clause on SOQL queries.</li>
    //                             <li><strong>DescribeFieldResult</strong> - provides the <strong><em>isAccessible</em></strong>, <strong><em>isCreateable</em></strong>, or <strong><em>isUpdateable</em></strong> methods.</li>
    //                             <li><strong>Security</strong> provides the <strong><em>stripInaccessible</em></strong> method.</li>
    //                         </ol>
    //                         <br/>
    //                         Reference: <a href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_chapter.htm" target="_blank" rel="noopener noreferrer">Apex Security and Sharing</a>
    //                     `
    //                 },
    //             ]
    //         },
    //         {id: 'item-6-3', label: 'SOQL with Enforced Security',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         The first option to verify object and field permission is WITH <strong>SECURITY_ENFORCED</strong> keyword on SOQL query.<br/>
    //                         This will raise an exception if SOQL tries to access something that's not accessible to the user.
    //                     `
    //                 },
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'warning',
    //                     label: 'Important',
    //                     html: `
    //                         Insert the <strong>SECURITY_ENFORCED</strong> keyword:
    //                         <ul>
    //                             <li>After the WHERE or FROM clause.</li>
    //                             <li>Before ORDER BY, LIMIT, OFFSET or any aggregate function.</li>
    //                         </ul>
    //                     `
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: '57239c4b13a728a8af1de014bb42be05'
    //                 }
    //             ]
    //         },
    //         {id: 'item-6-4', label: 'Security using DescribeSObjectResult and DescribeFieldResult',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         This method verifies permissions using DescribeSObjectResult and DescribeFieldResult. Before performing any DML operation,<br/>
    //                         call any of these methods <strong>isAccessible</strong>, <strong>isCreateable</strong>, or <strong>isUpdateable</strong> to verify if the user has required access. This option is CPU intensive.
    //                     `
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: '4124525f1f18e7f33db1d5b7de451ab8',
    //                     label: 'Read Access'
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: '33f6a4fc0021ab1e4ff400460f8d1575',
    //                     label: 'Create Access'
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: '925efb34f346a515e4cb46f25e853f16',
    //                     label: 'Update Access'
    //                 }

    //             ]
    //         },
    //         {id: 'item-6-5', label: 'Security using stripInaccessible',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         This method verifies permissions using DescribeSObjectResult and DescribeFieldResult. Before performing any DML operation,<br/>
    //                         call any of these methods <strong>isAccessible</strong>, <strong>isCreateable</strong>, or <strong>isUpdateable</strong> to verify if the user has required access. This option is CPU intensive.
    //                         This option was recently introduced by Salesforce to verify user permission.

    //                         This method can be used to strip the fields and relationship fields from query and sub-query results which the user does not have<br/>
    //                         access to. All inaccessible objects and fields will be removed before DML operations. Salesforce recommends using this method to verify<br/>
    //                         user access.
    //                         <ul>
    //                             <li>Class: Security.stripInaccessible</li>
    //                             <li>
    //                                 Supported Access Types:
    //                                 <ul>
    //                                     <li>CREATABLE</li>
    //                                     <li>READABLE</li>
    //                                     <li>UPDATABLE</li>
    //                                     <li>UPSERTABLE</li>
    //                                 </ul>
    //                             </li>
    //                         </ul>
    //                     `
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: '0e76c32e2109c5dfd81a6e99fc3dac8f',
    //                     label: 'Read stripInaccessible'
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: '6f76e3b37ea3e4a581fef226dde38206',
    //                     label: 'Create stripInaccessible'
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: 'ebfdbea1e95efcae5f4de28fcbf0d9b4',
    //                     label: 'Update stripInaccessible'
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: 'aa94880410e114fc795a597aca1190be',
    //                     label: 'Upsert stripInaccessible'
    //                 }
    //             ]},
    //     ]
    // },
    // {
    //     id: 'section-7',
    //     title: 'Thống kê doanh nghiệp 7',
    //     icon: ['fas', 'tablet-alt'],
    //     description: 'We like to access our record types without the need for extra queries.',
    //     lastModifiedDate: '2021-10-26',
    //     sections: [
    //         {id: 'item-7-1', label: 'Example on Standard Object Account',
    //             elements: [
    //                 {
    //                     type: 'code-block',
    //                     gist: 'cfb4218df0801c939d8715a90da379fe',
    //                 },
    //             ]
    //         },
    //         {id: 'item-7-2', label: 'Example on Custom Object Some_Object__c',
    //             elements: [
    //                 {
    //                     type: 'code-block',
    //                     gist: '9ff76e652b426c8dd5427fd645bdda5d',
    //                 },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     id: 'section-8',
    //     title: 'Thống kê doanh nghiệp 8',
    //     icon: ['fas', 'book-reader'],
    //     description: 'Writing tests is not just about Code Coverage. We want to adapt a test driven mindset and be able to ship our code with confidence. Our patterns ensure that we have considered both positive and negative scenarios of a feature.',
    //     lastModifiedDate: '2021-10-27',
    //     sections: [
    //         {id: 'item-8-1', label: 'Basic Test Patterns',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         We want to be testing for Positive, Negative, Null and Empty scenarios as much as possible. For the purpose of this example, let's say the method I am testing is:
    //                     `
    //                 },
    //                 {
    //                     type: 'code-block',
    //                     gist: '67b7097f2cf809e933b2669f9df5658e',
    //                 }
    //             ]
    //         },
    //         {id: 'item-8-2', label: 'Positive Test',
    //             elements: [
    //                 {
    //                     type: 'code-block',
    //                     gist: 'db3274cd65125c4a36ff52730218604a',
    //                 }
    //             ]
    //         },
    //         {id: 'item-8-3', label: 'Negative Test',
    //             elements: [
    //                 {
    //                     type: 'code-block',
    //                     gist: 'f34fd9fc32d85264f5d8ba8e6e959f5d',
    //                 }
    //             ]
    //         },
    //         {id: 'item-8-4', label: 'Empty Test',
    //             elements: [
    //                 {
    //                     type: 'code-block',
    //                     gist: '283128797edfaa601be672853c6eb54f',
    //                 }
    //             ]
    //         },
    //         {id: 'item-8-5', label: 'Null Test',
    //             elements: [
    //                 {
    //                     type: 'code-block',
    //                     gist: '57584bd5578627396b3f06fcfcc892a6',
    //                 }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     id: 'section-9',
    //     title: 'Thống kê doanh nghiệp 9',
    //     icon: ['fas', 'lightbulb'],
    //     description: 'Our code will always be ready to generate Apex Docs. Comments also help us track changes.',
    //     lastModifiedDate: '2021-10-26',
    //     sections: [
    //         {id: 'item-9-1', label: 'Learn about Apex Docs',
    //             elements: [
    //                 {
    //                     type: 'paragraph',
    //                     html: `
    //                         We will be using the conventions set by ApexDocs so we can generate them as needed<br/>
    //                         To learn more about ApexDocs, visit <a href="https://github.com/SalesforceFoundation/ApexDoc" target="_blank" rel="noopener noreferrer">SalesforceFoundation/ApexDoc</a>.
    //                     `
    //                 }
    //             ]
    //         },
    //         {id: 'item-9-2', label: 'Class Comments',
    //             elements: [
    //                 {
    //                     type: 'code-block',
    //                     gist: '8ab5d61d97393c2a20f0df9c4ebff875',
    //                 }
    //             ]
    //         },
    //         {id: 'item-9-3', label: 'Class Method Comments',
    //             elements: [
    //                 {
    //                     type: 'code-block',
    //                     gist: '0b50a9a119afd6530dd28650df833ea2',
    //                 }
    //             ]
    //         },
    //         {id: 'item-9-4', label: 'Useful plugins for Apex Docs',
    //             elements: [
    //                 {
    //                     type: 'callout-block',
    //                     blockType: 'info',
    //                     label: 'This list will be updated overtime, but here are some useful ones:',
    //                     html: `
    //                         <ul style="list-style-type:none;">
    //                             <li>
    //                                 <a href="https://marketplace.visualstudio.com/items?itemName=HugoOM.sfdx-autoheader" target="_blank" rel="noopener noreferrer">
    //                                 Salesforce Documenter for VSCode 
    //                                 </a>
    //                             </li>
    //                         </ul>
    //                     `
    //                 },
    //             ]
    //         },
    //     ]
    // },
];