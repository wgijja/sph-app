<template>
    <div class="pagination">
        <button
            :disabled="pageNo == 1"
            @click="$emit('getPageNum', pageNo - 1)"
        >
            上一页
        </button>
        <button
            v-show="startNumAndEndNum.startNum > 1"
            @click="$emit('getPageNum', 1)"
            :class="{ active: pageNo == 1 }"
        >
            1
        </button>
        <button v-show="startNumAndEndNum.startNum > 2">···</button>

        <button
            v-for="(page, index) in startNumAndEndNum.endNum"
            :key="index"
            v-show="page >= startNumAndEndNum.startNum"
            @click="$emit('getPageNum', page)"
            :class="{ active: pageNo == page }"
        >
            {{ page }}
        </button>

        <button v-show="startNumAndEndNum.endNum < totalPage - 1">···</button>
        <button
            v-show="startNumAndEndNum.endNum < totalPage"
            @click="$emit('getPageNum', totalPage)"
            :class="{ active: pageNo == totalPage }"
        >
            {{ totalPage }}
        </button>
        <button
            :disabled="pageNo == totalPage"
            @click="$emit('getPageNum', pageNo + 1)"
        >
            下一页
        </button>

        <button style="margin-left: 30px">共 {{ total }} 条</button>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ["pageNo", "pageSize", "total", "continues"],
    computed: {
        totalPage() {
            return Math.ceil(this.total / this.pageSize);
        },
        startNumAndEndNum() {
            let startNum = 0,
                endNum = 0;
            let eachSize = Math.floor(this.continues / 2);
            if (this.totalPage <= this.continues) {
                (startNum = 1), (endNum = this.totalPage);
            } else {
                startNum = this.pageNo - eachSize;
                endNum = this.pageNo + eachSize;
                if (startNum < 1) {
                    startNum = 1;
                    endNum = this.continues;
                }

                if (endNum > this.totalPage) {
                    endNum = this.totalPage;
                    startNum = this.totalPage - this.continues + 1;
                }
            }
            return { startNum, endNum };
        },
    },
};
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;

    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: red;
            color: #fff;
        }
    }
}

</style>