export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl?: string;
}

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'WebRTC 与 AI 降噪：实时音视频通讯的新纪元',
    excerpt: '探讨如何将深度学习降噪模型集成到 WebRTC 管道中，在弱网环境下依然保持清晰的语音通话质量。我们分析了 RNNoise 和自定义模型的性能差异。',
    date: '2026-05-18',
    readTime: '8 min read',
    category: 'WebRTC',
    tags: ['AI 降噪', 'WebRTC', 'Audio Processing'],
  },
  {
    id: '2',
    title: 'FFmpeg 与大模型：自动化生成短视频的高效工作流',
    excerpt: '利用 FFmpeg 提取视频关键帧，结合大视觉模型 (LMM) 进行场景理解，并使用 LLM 自动生成解说词和字幕的完整工程实践。',
    date: '2026-05-12',
    readTime: '12 min read',
    category: 'Video Processing',
    tags: ['FFmpeg', 'LLM', 'Auto-Editing'],
  },
  {
    id: '3',
    title: '端侧 AI 视频超分：在移动端实现 4K 实时渲染',
    excerpt: '详细介绍如何在移动设备上使用 WebGL 和端侧推理框架部署轻量级视频超分辨率模型，平衡功耗与画质。',
    date: '2026-04-28',
    readTime: '15 min read',
    category: 'Computer Vision',
    tags: ['Edge AI', 'Super Resolution', 'Mobile'],
  },
  {
    id: '4',
    title: '空间音频 (Spatial Audio) 渲染：从理论到 WebAudio API 实践',
    excerpt: '探索基于 HRTF 的 3D 空间音频算法，并展示如何使用 WebAudio API 在浏览器中构建沉浸式的多人语音聊天室。',
    date: '2026-04-10',
    readTime: '10 min read',
    category: 'Audio Processing',
    tags: ['Spatial Audio', 'WebAudio', '3D'],
  },
  {
    id: '5',
    title: '直播流中的实时手势识别与特效触发',
    excerpt: '在低延迟直播场景下，如何基于 MediaPipe 实现高精度的手势捕捉，并在服务器端或客户端触发实时的粒子特效。',
    date: '2026-03-22',
    readTime: '9 min read',
    category: 'AI Interaction',
    tags: ['MediaPipe', 'Live Streaming', 'Computer Vision'],
  }
];
