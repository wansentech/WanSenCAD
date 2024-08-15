export default {
    selectData: 'Please select a piece of data',
    modifyDataPrompt: 'Sorry, only unapproved documents can be edited!',
    selectProduct: 'Select product',
    inputSelectProduct: 'Please select product',
    productList: 'Product List',
    category:{
        title: 'Product Category List',
        tip: 'The product category list can add multiple product category and lower level category',
        add: 'Add product category',
        batchDelete: 'Batch delete product category',
        table:{
            categoryName: 'Name',
            categoryNumber: 'Number',
            categoryParent: 'Parent',
            sort: 'Sort',
            remark: 'Remark',
            createTime: 'Create Time',
            operate: 'Operate',
            edit: 'Edite product category',
            delete: 'Delete product category'
        }
    },
    info:{
        title: 'Product Information List',
        add: 'Add',
        batchDelete: 'Batch Delete',
        batchEnable: 'Batch Enable',
        batchDisable: 'Batch Disable',
        selectFile: 'Select File',
        import: 'Import',
        export: 'Export',
        batchEdit: 'Batch Edit',
        addProductInfo: 'Add Product Info',
        editProductInfo: 'Edit Product Info',
        checkBarCodeExist: 'Import Data - Detect duplicate products',
        dataBaseExist: 'There are duplicate product barcodes in the database, please check.',
        dataCover: 'Do you need overwrite the existing data?',
        exportData: 'Commodity Information Data ',
        header: {
            categoryName: 'Product category',
            keyWord: 'Keyword',
            serialNumber: 'Serial number',
            batchNumber: 'Batch number',
            warehouse: 'Warehouse',
            have: 'Have',
            none: 'None',
        },
        table: {
            barCode: 'BarCode',
            productName: 'Name',
            productStandard: 'Standard',
            productModel: 'Model',
            productColor: 'Color',
            productUnit: 'Unit',
            productCategory: 'Category',
            productStock: 'Stock',
            purchasePrice: 'Purchase price',
            retailPrice: 'Retail price',
            salesPrice: 'Sales price',
            lowestSellPrice: 'Lowest sell price',
            status: 'Status',
            createTime: 'Create time',
            operate: 'Operate',
        },
        importInfo: {
            title: 'Import product information data',
            templateName: 'Product Information Excel Template [Download]',
            infoData: 'Product info data',
            setup1: 'Step 1:',
            setup2: 'Step 2:',
            tip: 'Tip: Do not delete the first row in the template',
        },
        form: {
            basic: {
                title: 'Basic Info',
                name: 'Name',
                inputName: 'Please enter the name',
                standard: 'Standard',
                inputStandard: 'Please enter the standard',
                model: 'Model',
                inputModel: 'Please enter the model',
                color: 'Color',
                inputColor: 'Please enter the color',
                unit: 'Unit',
                inputUnit: 'Please enter the unit',
                inputManyUnit: 'Please select multiple units',
                unitTip: 'Need to enter the unit first to activate the input box here',
                weight: 'Basic weight',
                inputWeight: 'Please enter the basic weight (Kg)',
                sheIfLife: 'Quality guarantee period',
                inputSheIfLife: 'Please enter the shelf life (days)',
                category: 'Category',
                inputCategory: 'Please select a category',
                serialNumber: 'Serial number',
                inputSerialNumber: 'Please select whether there is a serial number',
                serialNumberTip: 'If selected as Have, the serial number of the product needs to be entered in the purchase receipt form',
                batchNumber: 'Batch number',
                inputBatchNumber: 'Please select whether there is a batch number',
                batchNumberTip: 'If selected as Have, the batch number and expiration date of the product need to be entered in the purchase receipt form',
                warehouseShelves: 'Warehouse shelves',
                multipleAttributes: 'Multiple attributes',
                multipleAttributesTip: 'For industries such as clothing, shoes, and hats with multiple attributes, it is necessary to enter the unit first in order to activate the input box here',
                inputMultipleAttributes: 'Please select multiple attributes (multiple choices are allowed)',
                insertRow: 'Insert A Row',
                deleteRow: 'Delete Selected Rows',
                purchasePriceBatch: 'Purchase price - batch',
                retailPriceBatch: 'Retail price - batch',
                salesPriceBatch: 'Sales price - batch',
                lowestSellPriceBatch: 'Lowest sell price - batch',
                table: {
                    pleaseEnter: 'Please enter ',
                    barCode: 'BarCode',
                    unit: 'Unit',
                    multipleAttributes: 'Multiple attributes',
                    retailPrice: 'Retail price',
                    purchasePrice: 'Purchase price',
                    salesPrice: 'Sales price',
                    lowestSellPrice: 'Lowest sell price',
                },
                remark: 'Remark',
                inputRemark: 'Please enter the remark',
                noticeOne: 'Please insert a row of data and enter the barcode price information for the product',
                noticeTwo: 'The system has detected that you do not have warehouse information. Please add at least one warehouse information in the Basic Information menu bar',
                noticeThree: 'Sorry, you haven not selected multiple attributes yet. Only after enabling multiple attributes can you batch set the amount',
                noticeFour: 'Please enter barcode, unit, and other information first!',
                inputPrice: 'Please enter the price',
                price: 'Price',
                batchSet: 'Batch Settings',
            },
            extendInfo: {
                title: 'Extended Info',
                manufacturer: 'Manufacturer',
                customOne: 'Custom1',
                customTwo: 'Custom2',
                customThree: 'Custom3',
            },
            inventoryQuantity: {
                title: 'Inventory Quantity',
                initialQuantity: 'Initial inventory quantity',
                inputInitialQuantity: 'Please enter the initial inventory quantity',
                batchInitialQuantity: 'Initial inventory quantity - Batch settings',
                minSafetyQuantity: 'Minimum safety inventory quantity',
                inputMinSafetyQuantity: 'Please enter the minimum safety inventory quantity',
                batchMinSafetyQuantity: 'Minimum safety inventory quantity - Batch settings',
                maxSafetyQuantity: 'Maximum safety inventory quantity',
                inputMaxSafetyQuantity: 'Please enter the maximum safety inventory quantity',
                batchMaxSafetyQuantity: 'Maximum safety inventory quantity - Batch settings',
                warehouse: 'Warehouse (product barcode/product unit)',
                inputNumber: 'Please enter the quantity',
                number: 'Quantity',
            },
            images: {
                title: 'Image Info',
                upload: 'Upload Image',
                tip: 'Upload prompt: Up to 4 images can be uploaded, supporting JPG, JPEG, and PNG formats, with a maximum support of 2M',
            },
        }
    },
    attribute: {
        title: 'Product Multi Attribute List',
        add: 'Add product attributes',
        batchDelete: 'Batch delete product attributes',
        addProductAttribute: 'Add Product Attribute',
        editProductAttribute: 'Edit Product Attribute',
        table: {
            attributeName: 'Attribute name',
            attributeValue: 'Attribute values (separated by |)',
            sort: 'Sort',
            remark: 'Remark',
            createTime: 'Create Time',
            operate: 'Operate',
            edit: 'Edit product attributes',
            delete: 'Delete product attributes'
        }
    },
    unit: {
        title: 'Product Units List',
        add: 'Add product unit',
        batchDelete: 'Batch delete product unit',
        addProductUnit: 'Add Product Measurement Unit',
        editProductUnit: 'Edit Product Measurement Unit',
        table: {
            unitName: 'Unit of measurement',
            basicUnit: 'Basic unit',
            inputBasicUnit: 'Please enter the base unit (Small unit)',
            deputyUnitOne: 'Deputy Unit 1',
            inputDeputyUnitOne: 'Please enter the deputy unit (Major unit)',
            inputProportionOne: 'Please enter the proportion',
            deputyUnitTwo: 'Deputy Unit 2',
            inputDeputyUnitTwo: 'Please enter deputy Unit 2 (Major Unit)',
            inputProportionTwo: 'Please enter the proportion 2',
            deputyUnitThree: 'Deputy Unit 3',
            inputDeputyUnitThree: 'Please enter deputy Unit 3 (Major Unit)',
            inputProportionThree: 'Please enter the proportion 3',
            status: 'Status',
            createTime: 'Create Time',
            operate: 'Operate',
            edit: 'Edit product unit',
            delete: 'Delete product unit'
        },
        noticeOne: 'Sorry, the proportion of sub units cannot be empty',
    }
};