import React from 'react'

function Form({onView}) {
    console.log(onView);
    return (
        <div class="col-md-4 grid-margin ms-2">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">Thông tin</h3>
                    <form class="form-sample" action="#">
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Tên danh mục</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row my-3">
                            <label class="col-sm-3 col-form-label">Mô tả</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Trạng thái</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        {/* <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Giới tính</label>
                            <div class="col-sm-9">
                                <select class="form-control">
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Ngày sinh</label>
                            <div class="col-sm-9">
                                <input class="form-control" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Nơi sinh</label>
                            <div class="col-sm-9">
                                <select class="form-control">
                                    <option>Hà Nội</option>
                                    <option>TP. Hồ Chí Minh</option>
                                    <option>Đà Nẵng</option>
                                    <option>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Địa chỉ</label>
                            <div class="col-sm-9">
                                <textarea class="form-control"></textarea>
                            </div>
                        </div> */}
                        <button type="submit" class="btn btn-primary me-2 mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form