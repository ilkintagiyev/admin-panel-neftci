import React, { ChangeEvent, FormEvent, useState } from 'react'
import style from "../../styles/Add.module.scss";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const Add = () => {

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        if (image) formData.append("file", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s");

        try {
            await axios.post(`${baseUrl}/aboutuses`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setTitle("");
            setContent("");
            setImage(null);
            setPreview(null);
            alert("Məlumat əlavə olundu");
        } catch (error) {
            console.error("Xəta baş verdi:", error);
            alert("Xəta baş verdi");
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <label>
                <span>Başlıq</span>
                <input
                    className={style.input}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                <span>Kontent</span>
                <input
                    className={style.input}
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </label>
            <label>
                <span>Şəkil yüklə</span>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </label>

            {preview && (
                <div className={style.preview}>
                    <p>Şəkil ön baxış:</p>
                    <img src={preview} alt="Preview" className={style.image} />
                </div>
            )}

            <button type="submit">Əlavə et</button>
        </form>
    )
}

export default Add