//import hook useState from react
import React, { useState } from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function CreatePost({ errors }) {

    //define state
    const [nama_project, setNama_project] = useState('');
    const [deskripsi_project, setDeskripsi_project] = useState('');
    const [gambar_1, setGambar_1] = useState('');


    function kopi(e) {
        const file = e.target.files[0];
        setGambar_1(file.name)
        // console.log(file.name);
    }

    console.log(gambar_1);
    //function "storePost"
    const storePost = async (e) => {
        e.preventDefault();

        Inertia.post('/posts', {
            nama_project: nama_project,
            deskripsi_project: deskripsi_project,
            gambar_1: gambar_1
        });
    }

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">TAMBAH POST</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={storePost}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nama Project</label>
                                    <input type="text" className="form-control" value={nama_project} onChange={(e) => setNama_project(e.target.value)} placeholder="Masukkan Nama Project" />
                                </div>
                                {errors.nama_project && (
                                    <div className="alert alert-danger">
                                        {errors.nama_project}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Deskripsi Project</label>
                                    <textarea className="form-control" value={deskripsi_project} onChange={(e) => setDeskripsi_project(e.target.value)} placeholder="Masukkan Deskripsi Project" rows={4}></textarea>
                                </div>
                                {errors.deskripsi_project && (
                                    <div className="alert alert-danger">
                                        {errors.deskripsi_project}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Gambar 1</label>
                                    <input type="file" className="form-control" onChange={kopi} />
                                </div>
                                {errors.gambar_1 && (
                                    <div className="alert alert-danger">
                                        {errors.gambar_1}
                                    </div>
                                )}

                                <div>
                                    <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> SAVE</button>
                                    <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> RESET</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

